import {
  v4 as uuidv4
} from "uuid";

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

  let encryptedProof = _encryptWithAes(aesKey, didPowerUpRequestPayload);

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

async function _generateAesKey() {};

async function _encryptWithAes(aesKey, payload) {};

async function _encryptWithRsa(rsaKey, payload) {};