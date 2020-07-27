import {
  v4 as uuidv4
} from "uuid";

let forge = require('node-forge');

async function didPowerUpfromWallet({
  senderDid,
  pairwiseDid,
  amount,
  privateKey,
  governmentRsaPubKey
}) {
  let timestamp = Date.now().toString();
  let signature = await _signPowerUp({
    senderDid: senderDid,
    pairwiseDid: pairwiseDid,
    timeStamp: timestamp,
    privateKey: privateKey
  });

  let didPowerUpRequestPayload = new Object();
  didPowerUpRequestPayload['sender_did'] = senderDid;
  didPowerUpRequestPayload['pairwise_did'] = pairwiseDid;
  didPowerUpRequestPayload['timestamp'] = timestamp;
  didPowerUpRequestPayload['signature'] = signature;

  let aesKey = _generateAesKey();

  let encryptedProof = _encryptWithAes(aesKey, JSON.stringify(didPowerUpRequestPayload));

  let encryptedProofKey = _encryptWithRsa(governmentRsaPubKey, aesKey);

  let requestDidPowerUp = new Object();
  requestDidPowerUp['claimant'] = senderDid;
  requestDidPowerUp['amount'] = amount;
  requestDidPowerUp['proof'] = encryptedProof;
  requestDidPowerUp['id'] = uuidv4();
  requestDidPowerUp['proof_key'] = encryptedProofKey;

  return requestDidPowerUp;
}

async function _signPowerUp({
  senderDid,
  pairwiseDid,
  timeStamp,
  privateKey
}) {};

function _generateAesKey() {
  return forge.random.getBytesSync(32);
};

function _encryptWithAes(aesKey, payload) {
  let cipher = forge.aes.createEncryptionCipher(aesKey, 'GCM');
  let iv = forge.random.getBytesSync(12);
  cipher.start(iv);
  cipher.update(forge.util.createBuffer(payload));
  cipher.finish();

};

function _randomNonce(length) {
  let nonce = "";
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for(let i = 0; i < length; i++) {
      nonce += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return nonce;
}

async function _encryptWithRsa(rsaKey, payload) {};