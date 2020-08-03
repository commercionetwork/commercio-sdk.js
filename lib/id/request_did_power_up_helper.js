"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.didPowerUpfromWallet = didPowerUpfromWallet;

var _uuid = require("uuid");

var forge = require('node-forge');
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
  signatureJson['signature'] = forge.util.encode64(signature);
  var aesKey = forge.random.getBytesSync(32);

  var encryptedProof = _encryptWithAes(aesKey, JSON.stringify(signatureJson));

  var encryptedProofKey = _encryptWithRsa(governmentRsaPubKey, aesKey.toString());

  var requestDidPowerUp = new Object();
  requestDidPowerUp['claimant'] = senderDid;
  requestDidPowerUp['amount'] = amount;
  requestDidPowerUp['proof'] = encryptedProof;
  requestDidPowerUp['id'] = (0, _uuid.v4)();
  requestDidPowerUp['proof_key'] = encryptedProofKey;
  return requestDidPowerUp;
}

function _makeJsonSignature(_ref2) {
  var signatureData = _ref2.signatureData,
      key = _ref2.key;
  var privateKey = forge.pki.privateKeyFromPem(key);
  var md = forge.md.sha256.create();
  md.update(signatureData, 'utf8');
  return privateKey.sign(md);
}

;

function _encryptWithAes(aesKey, payload) {
  var cipher = forge.cipher.createCipher('AES-GCM', aesKey);
  var iv = forge.random.getBytesSync(12);
  cipher.start({
    iv: iv
  });
  cipher.update(forge.util.createBuffer(payload, "utf8"));
  cipher.finish();
  var encrypted = cipher.output;
  return forge.util.encode64(encrypted);
}

;

function _encryptWithRsa(rsaKey, payload) {
  var publicKey = forge.pki.publicKeyFromPem(rsaKey);
  var buf = forge.util.createBuffer(payload, "utf8");
  var encrypted = publicKey.encrypt(buf, 'RSAES-PKCS1-V1_5');
  return forge.util.encode64(encrypted);
}

;