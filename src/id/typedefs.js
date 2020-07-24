/**
 * DidDocument
 * @typedef {Object} DidDocument
 * @property {String} @context
 * @property {String} id
 * @property {Array.<PublicKey>} publicKey
 * @property {DidDocumentProof} proof
 * @property {DidDocumentService} service
 */
/**
 * PublicKey
 * @typedef {Object} PublicKey
 * @property {String} id
 * @property {String} type
 * @property {String} controller
 * @property {String} publicKeyPem
 */
/**
 * DidDocumentProof
 * @typedef {Object} DidDocumentProof
 * @property {String} type
 * @property {String} created
 * @property {String} proofPurpose
 * @property {String} controller
 * @property {String} verificationMethod
 * @property {String} signatureValue
 */
/**
 * DidDocumentProofSignatureContent
 * @typedef {Object} DidDocumentProofSignatureContent
 * @property {String} @context
 * @property {String} id
 * @property {Array.<PublicKey>} publicKey
 */
/**
 * DidDocumentService
 * @typedef {Object} DidDocumentService
 * @property {String} id
 * @property {String} type
 * @property {String} serviceEndpoint
 */