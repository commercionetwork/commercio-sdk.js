"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildDidDocumentProofSignatureContent = buildDidDocumentProofSignatureContent;
exports.didDocumentFromWallet = didDocumentFromWallet;

/**
 * Build the proof signature content of DDO
 * @param {String} context
 * @param {String} id
 * @param {Array.<DidDocumentPublicKey>} publicKeys
 * @return {DidDocumentProofSignatureContent}
 */
function buildDidDocumentProofSignatureContent(_ref) {
  var context = _ref.context,
      id = _ref.id,
      publicKeys = _ref.publicKeys;
  var didDocumentProofSignatureContent = new Object();
  didDocumentProofSignatureContent['@context'] = context;
  didDocumentProofSignatureContent['id'] = id;
  didDocumentProofSignatureContent['publicKey'] = publicKeys;
  return didDocumentProofSignatureContent;
}

;
/**
 * Creates a DDO
 * @param {String} context
 * @param {Array.<DidDocumentPublicKey>} publicKeys
 * @param {String} bech32Address
 * @param {String} bech32PublicKey
 * @param {String} signatureValue
 * @param {String} purpose
 * @param {Array.<DidDocumentService>} services
 * @return {DidDocument}
 */

function didDocumentFromWallet(_ref2) {
  var context = _ref2.context,
      publicKeys = _ref2.publicKeys,
      bech32Address = _ref2.bech32Address,
      bech32PublicKey = _ref2.bech32PublicKey,
      signatureValue = _ref2.signatureValue,
      purpose = _ref2.purpose,
      services = _ref2.services;

  if (publicKeys.length < 2) {
    throw "At least two keys are required";
  } else if (publicKeys[0]['type'] != "RsaVerificationKey2018") {
    throw "The type of the first public key has to be 'RsaVerificationKey2018'";
  } else if (publicKeys[1]['type'] != "RsaSignatureKey2018") {
    throw "The type of the second public key has to be 'RsaSignatureKey2018'";
  }

  var proof = _computeDidDocumentProof({
    bech32Address: bech32Address,
    bech32PublicKey: bech32PublicKey,
    signatureValue: signatureValue,
    purpose: purpose
  });

  var didDocument = new Object();
  didDocument['@context'] = context;
  didDocument['id'] = bech32Address;
  didDocument['publicKey'] = publicKeys;
  didDocument['proof'] = proof;
  didDocument['service'] = services;
  return didDocument;
}

;
/**
 * Computes the DDO proof based on the given controller, verificationMethod, signatureValue and proofPurpose
 * @param {String} bech32Address 
 * @param {String} bech32PublicKey 
 * @param {String} signatureValue 
 * @param {String} purpose 
 * @return {DidDocumentProof}
 */

function _computeDidDocumentProof(_ref3) {
  var bech32Address = _ref3.bech32Address,
      bech32PublicKey = _ref3.bech32PublicKey,
      signatureValue = _ref3.signatureValue,
      purpose = _ref3.purpose;
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