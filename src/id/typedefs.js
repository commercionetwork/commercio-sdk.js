/**
 * @typedef {Object} DidDocument
 * @property {String} @context
 * @property {String} id
 * @property {Array.<DidDocumentPublicKey>} publicKey
 * @property {DidDocumentProof} proof
 * @property {DidDocumentService} service
 */
/**
 * @typedef {Object} DidDocumentProof
 * @property {String} type
 * @property {String} created
 * @property {String} proofPurpose
 * @property {String} controller
 * @property {String} verificationMethod
 * @property {String} signatureValue
 */
/**
 * @typedef {Object} DidDocumentPublicKey
 * @property {String} id
 * @property {String} type
 * @property {String} controller
 * @property {String} publicKeyPem
 */
/**
 * @typedef {Object} DidDocumentService
 * @property {String} id
 * @property {String} type
 * @property {String} serviceEndpoint
 */
/**
 * @typedef {Object} DidDocumentProofSignatureContent
 * @property {String} @context
 * @property {String} id
 * @property {Array.<DidDocumentPublicKey>} publicKey
 */
/**
 * @typedef {Object} RequestDidPowerUp
 * @property {String} claimant
 * @property {Array.<StdCoin>} amount
 * @property {String} proof
 * @property {String} id
 * @property {String} proof_key
 */
/**
 * @typedef {Object} DidPowerUpRequestPayload
 * @property {String} sender_did
 * @property {String} pairwise_did
 * @property {String} timestamp
 * @property {String} signature
 */
/**
 * @typedef {Object} StdCoin
 * @property {String} denom
 * @property {String} amount
 */