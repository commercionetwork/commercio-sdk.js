"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildDidDocumentProofSignatureContent = buildDidDocumentProofSignatureContent;
exports.buildDidDocumentPublicKey = buildDidDocumentPublicKey;
exports.didDocumentFromWallet = didDocumentFromWallet;

/**
 * Builds a DDO public key.
 * @param {String} id
 * @param {String} type
 * @param {String} controller
 * @param {String} publicKeyPem
 * @return {DidDocumentPublicKey}
 */
function buildDidDocumentPublicKey(_ref) {
  var id = _ref.id,
      type = _ref.type,
      controller = _ref.controller,
      publicKeyPem = _ref.publicKeyPem;
  var key = new Object();
  key['id'] = id;
  key['type'] = type;
  key['controller'] = controller;
  key['publicKeyPem'] = publicKeyPem;
  return key;
}
/**
 * Builds the proof signature content of DDO.
 * @param {String} context
 * @param {String} did
 * @param {Array.<DidDocumentPublicKey>} publicKeys
 * @return {DidDocumentProofSignatureContent}
 */


function buildDidDocumentProofSignatureContent(_ref2) {
  var context = _ref2.context,
      did = _ref2.did,
      publicKeys = _ref2.publicKeys;
  var didDocumentProofSignatureContent = new Object();
  didDocumentProofSignatureContent['@context'] = context;
  didDocumentProofSignatureContent['id'] = did;
  didDocumentProofSignatureContent['publicKey'] = publicKeys;
  return didDocumentProofSignatureContent;
}

;
/**
 * Creates a DDO object.
 * @param {String} context
 * @param {Array.<DidDocumentPublicKey>} publicKeys
 * @param {String} bech32Address
 * @param {String} bech32PublicKey
 * @param {String} signatureValue
 * @param {String} purpose
 * @return {DidDocument}
 */

function didDocumentFromWallet(_ref3) {
  var context = _ref3.context,
      did = _ref3.did,
      publicKeys = _ref3.publicKeys,
      bech32PublicKey = _ref3.bech32PublicKey,
      signatureValue = _ref3.signatureValue,
      purpose = _ref3.purpose;

  if (publicKeys.length < 2) {
    throw "At least two keys are required";
  } else if (publicKeys[0]['type'] != "RsaVerificationKey2018") {
    throw "The type of the first public key has to be 'RsaVerificationKey2018'";
  } else if (publicKeys[1]['type'] != "RsaSignatureKey2018") {
    throw "The type of the second public key has to be 'RsaSignatureKey2018'";
  }

  var proof = _computeDidDocumentProof({
    bech32Address: did,
    bech32PublicKey: bech32PublicKey,
    signatureValue: signatureValue,
    purpose: purpose
  });

  var didDocument = new Object();
  didDocument['@context'] = context;
  didDocument['id'] = did;
  didDocument['publicKey'] = publicKeys;
  didDocument['proof'] = proof;
  return didDocument;
}

;
/**
 * Computes the DDO proof based on the given controller, verificationMethod, signatureValue and proofPurpose.
 * @param {String} bech32Address 
 * @param {String} bech32PublicKey 
 * @param {String} signatureValue 
 * @param {String} purpose 
 * @return {DidDocumentProof}
 */

function _computeDidDocumentProof(_ref4) {
  var bech32Address = _ref4.bech32Address,
      bech32PublicKey = _ref4.bech32PublicKey,
      signatureValue = _ref4.signatureValue,
      purpose = _ref4.purpose;
  var proof = new Object();
  proof['type'] = "EcdsaSecp256k1VerificationKey2019";
  var created = new Date();
  proof['created'] = created.toISOString();
  var proofPurpose = purpose != null ? purpose : "authentication";
  proof['proofPurpose'] = proofPurpose;
  proof['controller'] = bech32Address;
  proof['verificationMethod'] = bech32PublicKey;
  proof['signatureValue'] = signatureValue;
  return proof;
}

;