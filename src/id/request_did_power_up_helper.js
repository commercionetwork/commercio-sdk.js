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
  signatureJson['signature'] = forge.util.encode64(signature);

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
  return privateKey.sign(md);
};

function _encryptWithAes(aesKey, payload) {
  let cipher = forge.cipher.createCipher('AES-GCM', aesKey);
  let iv = forge.random.getBytesSync(12);
  cipher.start({
    iv: iv
  });
  cipher.update(forge.util.createBuffer(payload, "utf8"));
  cipher.finish();
  let encrypted = cipher.output.getBytes();
  return forge.util.encode64(encrypted);
};

function _encryptWithRsa(rsaPubKey, payload) {
  let publicKey = forge.pki.publicKeyFromPem(rsaPubKey);
  let encrypted = publicKey.encrypt(payload, 'RSAES-PKCS1-V1_5');
  return forge.util.encode64(encrypted);
};

export {
  didPowerUpfromWallet
};