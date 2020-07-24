/**
 * Build the proof signature content of DDO
 * @param {String} context
 * @param {String} id
 * @param {Array.<PublicKey>} publicKeys
 * @return {DidDocumentProofSignatureContent}
 */
function buildDidDocumentProofSignatureContent({
  context,
  id,
  publicKeys
}) {
  let didDocumentProofSignatureContent = new Object;
  didDocumentProofSignatureContent['@context'] = context;
  didDocumentProofSignatureContent['id'] = id;
  didDocumentProofSignatureContent['publicKey'] = publicKeys;
  return didDocumentProofSignatureContent;
};

/**
 * Computes the DDO proof based on the given controller, verificationMethod, signatureValue and purpose
 * @param {String} controller 
 * @param {String} verificationMethod 
 * @param {String} signatureValue 
 * @param {String} purpose 
 * @return {DidDocumentProof}
 */
function computeDidDocumentProof({
  controller,
  verificationMethod,
  signatureValue,
  purpose
}) {
  let proof = new Object();
  proof['type'] = "EcdsaSecp256k1VerificationKey2019";
  let created = new Date()
  proof['created'] = created.toISOString();
  let proofPurpose = (purpose != null) ? purpose : "authentication";
  proof['proofPurpose'] = proofPurpose;
  proof['controller'] = controller;
  proof['verificationMethod'] = verificationMethod;
  proof['signatureValue'] = signatureValue;
  return proof;
};

/**
 * Creates a DDO
 * @param {String} context
 * @param {String} bech32Address
 * @param {Array.<PublicKey>} publicKeys
 * @param {DidDocumentProof} proof
 * @param {Array.<DidDocumentService>} services
 * @return {DidDocument}
 */
function didDocumentFromWallet({
  context,
  bech32Address,
  publicKeys,
  proof,
  services
}) {
  if (publicKeys.length < 2) {
    throw "At least two keys are required";
  } else if (publicKeys[0]['type'] != "RsaVerificationKey2018") {
    throw "The type of the first public key has to be 'RsaVerificationKey2018'";
  } else if (publicKeys[1]['type'] != "RsaSignatureKey2018") {
    throw "The type of the second public key has to be 'RsaSignatureKey2018'";
  }

  let didDocument = new Object();
  didDocument['@context'] = context;
  didDocument['id'] = bech32Address;
  didDocument['publicKey'] = publicKeys;
  didDocument['proof'] = proof;
  didDocument['service'] = services;
  return didDocument;
};

export {
  buildDidDocumentProofSignatureContent,
  computeDidDocumentProof,
  didDocumentFromWallet,
};