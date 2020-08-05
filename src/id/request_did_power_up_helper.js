import {
  v4 as uuidv4
} from "uuid";

let forge = require('node-forge');

/**
 * Creates a Did PowerUp
 * 
 * @param {String} senderDid 
 * @param {String} pairwiseDid 
 * @param {Array.<StdCoin>} amount 
 * @param {String} privateKey 
 * @param {String} governmentRsaPubKey 
 * @return {RequestDidPowerUp}
 */
function didPowerUpfromWallet({
  senderDid,
  pairwiseDid,
  amount,
  privateKey,
  governmentRsaPubKey
}) {
  let timestamp = Date.now().toString();
  let signatureData = senderDid + pairwiseDid + timestamp;
  let signature = _makeJsonSignature({
    signatureData: signatureData,
    key: privateKey
  });

  let signatureJson = new Object();
  signatureJson['sender_did'] = senderDid;
  signatureJson['pairwise_did'] = pairwiseDid;
  signatureJson['timestamp'] = timestamp;
  signatureJson['signature'] = signature;

  let aesKey = forge.random.getBytesSync(32);

  let encryptedProof = _encryptWithAes(aesKey, JSON.stringify(signatureJson));

  let encryptedProofKey = _encryptWithRsa(governmentRsaPubKey, aesKey);

  let requestDidPowerUp = new Object();
  requestDidPowerUp['claimant'] = senderDid;
  requestDidPowerUp['amount'] = amount;
  requestDidPowerUp['proof'] = encryptedProof;
  requestDidPowerUp['id'] = uuidv4();
  requestDidPowerUp['proof_key'] = encryptedProofKey;

  return requestDidPowerUp;
}

function _makeJsonSignature({
  signatureData,
  key
}) {
  let privateKey = forge.pki.privateKeyFromPem(key);
  let md = forge.md.sha256.create();
  md.update(signatureData, 'utf8');
  let signature = privateKey.sign(md);
  let signatureBuffer = Buffer.from(signature, "binary");
  return signatureBuffer.toString("base64");
};

function _encryptWithAes(aesKey, payload) {
  let cipher = forge.cipher.createCipher('AES-GCM', aesKey);
  let iv = forge.random.getBytesSync(12);
  cipher.start({
    iv: iv
  });
  cipher.update(forge.util.createBuffer(payload, "utf8"));
  cipher.finish();
  let cipherText = cipher.output.getBytes();
  let tag = cipher.mode.tag.getBytes();
  let tagBuffer = Buffer.from(tag, "binary");
  let nonceBuffer = Buffer.from(iv, "binary");
  let cipherTextBuffer = Buffer.from(cipherText, "binary");
  let chiperTextWithNonce = Buffer.concat([nonceBuffer, cipherTextBuffer, tagBuffer]);
  return chiperTextWithNonce.toString("base64");
};

function _encryptWithRsa(rsaPubKey, payload) {
  let publicKey = forge.pki.publicKeyFromPem(rsaPubKey);
  let cipherText = publicKey.encrypt(payload, 'RSAES-PKCS1-V1_5');
  let cipherTextBuffer = Buffer.from(cipherText, "binary");
  return cipherTextBuffer.toString("base64");
};

export {
  didPowerUpfromWallet
};