/**
 * Builds a DDO public key.
 * 
 * @param {String} id
 * @param {String} type
 * @param {String} controller
 * @param {String} publicKeyPem
 * @return {DidDocumentPublicKey}
 */
function buildDidDocumentPublicKey({
  id,
  type,
  controller,
  publicKeyPem
}) {
  let key = new Object();
  key['id'] = id;
  key['type'] = type;
  key['controller'] = controller;
  key['publicKeyPem'] = publicKeyPem;
  return key;
}
/**
 * Builds the proof signature content of DDO
 * 
 * @param {String} context
 * @param {String} did
 * @param {Array.<DidDocumentPublicKey>} publicKeys
 * @return {DidDocumentProofSignatureContent}
 */
function buildDidDocumentProofSignatureContent({
  context,
  did,
  publicKeys
}) {
  let didDocumentProofSignatureContent = new Object;
  didDocumentProofSignatureContent['@context'] = context;
  didDocumentProofSignatureContent['id'] = did;
  didDocumentProofSignatureContent['publicKey'] = publicKeys;
  return didDocumentProofSignatureContent;
};

/**
 * Creates a DDO
 * 
 * @param {String} context
 * @param {Array.<DidDocumentPublicKey>} publicKeys
 * @param {String} bech32Address
 * @param {String} bech32PublicKey
 * @param {String} signatureValue
 * @param {String} purpose
 * @return {DidDocument}
 */
function didDocumentFromWallet({
  context,
  did,
  publicKeys,
  bech32PublicKey,
  signatureValue,
  purpose
}) {
  if (publicKeys.length < 2) {
    throw "At least two keys are required";
  } else if (publicKeys[0]['type'] != "RsaVerificationKey2018") {
    throw "The type of the first public key has to be 'RsaVerificationKey2018'";
  } else if (publicKeys[1]['type'] != "RsaSignatureKey2018") {
    throw "The type of the second public key has to be 'RsaSignatureKey2018'";
  }

  let proof = _computeDidDocumentProof({
    bech32Address: did,
    bech32PublicKey: bech32PublicKey,
    signatureValue: signatureValue,
    purpose: purpose
  });

  let didDocument = new Object();
  didDocument['@context'] = context;
  didDocument['id'] = did;
  didDocument['publicKey'] = publicKeys;
  didDocument['proof'] = proof;
  return didDocument;
};

/**
 * Computes the DDO proof based on the given controller, verificationMethod, signatureValue and proofPurpose
 * @param {String} bech32Address 
 * @param {String} bech32PublicKey 
 * @param {String} signatureValue 
 * @param {String} purpose 
 * @return {DidDocumentProof}
 */
function _computeDidDocumentProof({
  bech32Address,
  bech32PublicKey,
  signatureValue,
  purpose
}) {
  let proof = new Object();
  proof['type'] = "EcdsaSecp256k1VerificationKey2019";
  let created = new Date()
  proof['created'] = created.toISOString();
  let proofPurpose = (purpose != null) ? purpose : "authentication";
  proof['proofPurpose'] = proofPurpose;
  proof['controller'] = bech32Address;
  proof['verificationMethod'] = bech32PublicKey;
  proof['signatureValue'] = signatureValue;
  return proof;
};

export {
  buildDidDocumentProofSignatureContent,
  buildDidDocumentPublicKey,
  didDocumentFromWallet,
};