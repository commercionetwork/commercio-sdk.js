"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.didPowerUpfromWallet = didPowerUpfromWallet;

var _uuid = require("uuid");

var forge = require('node-forge');
/**
 * Creates a Did PowerUp object.
 * @param {String} senderDid 
 * @param {String} pairwiseDid 
 * @param {Array.<StdCoin>} amount 
 * @param {String} privateKey 
 * @param {String} governmentRsaPubKey 
 * @return {RequestDidPowerUp}
 */


function didPowerUpfromWallet(_ref) {
  var senderDid = _ref.senderDid,
      pairwiseDid = _ref.pairwiseDid,
      amount = _ref.amount,
      privateKey = _ref.privateKey,
      governmentRsaPubKey = _ref.governmentRsaPubKey;
  var timestamp = Date.now().toString();
  var signatureData = senderDid + pairwiseDid + timestamp;

  var signature = _makeJsonSignature({
    signatureData: signatureData,
    key: privateKey
  });

  var signatureJson = new Object();
  signatureJson['sender_did'] = senderDid;
  signatureJson['pairwise_did'] = pairwiseDid;
  signatureJson['timestamp'] = timestamp;
  signatureJson['signature'] = signature;
  var aesKey = forge.random.getBytesSync(32);

  var encryptedProof = _encryptWithAes(aesKey, JSON.stringify(signatureJson));

  var encryptedProofKey = _encryptWithRsa(governmentRsaPubKey, aesKey);

  var requestDidPowerUp = new Object();
  requestDidPowerUp['claimant'] = senderDid;
  requestDidPowerUp['amount'] = amount;
  requestDidPowerUp['proof'] = encryptedProof;
  requestDidPowerUp['id'] = (0, _uuid.v4)();
  requestDidPowerUp['proof_key'] = encryptedProofKey;
  return requestDidPowerUp;
}
/**
 * Sign the proof.
 * @param {String} signatureData
 * @param {String} key
 * @return {String}
 */


function _makeJsonSignature(_ref2) {
  var signatureData = _ref2.signatureData,
      key = _ref2.key;
  var privateKey = forge.pki.privateKeyFromPem(key);
  var md = forge.md.sha256.create();
  md.update(signatureData, 'utf8');
  var signature = privateKey.sign(md);
  var signatureBuffer = Buffer.from(signature, "binary");
  return signatureBuffer.toString("base64");
}

;
/**
 * Encrypt the proof.
 * @param {String} aesKey 
 * @param {String} payload 
 * @return {String}
 */

function _encryptWithAes(aesKey, payload) {
  var cipher = forge.cipher.createCipher('AES-GCM', aesKey);
  var iv = forge.random.getBytesSync(12);
  cipher.start({
    iv: iv
  });
  cipher.update(forge.util.createBuffer(payload, "utf8"));
  cipher.finish();
  var cipherText = cipher.output.getBytes();
  var tag = cipher.mode.tag.getBytes();
  var tagBuffer = Buffer.from(tag, "binary");
  var nonceBuffer = Buffer.from(iv, "binary");
  var cipherTextBuffer = Buffer.from(cipherText, "binary");
  var chiperTextWithNonce = Buffer.concat([nonceBuffer, cipherTextBuffer, tagBuffer]);
  return chiperTextWithNonce.toString("base64");
}

;
/**
 * Encrypt the key.
 * @param {String} rsaPubKey 
 * @param {String} payload
 * @return {String} 
 */

function _encryptWithRsa(rsaPubKey, payload) {
  var publicKey = forge.pki.publicKeyFromPem(rsaPubKey);
  var cipherText = publicKey.encrypt(payload, 'RSAES-PKCS1-V1_5');
  var cipherTextBuffer = Buffer.from(cipherText, "binary");
  return cipherTextBuffer.toString("base64");
}

;