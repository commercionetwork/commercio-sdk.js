/**
 * Mint type definitions
 */
/**
 * CloseCdp
 * @typedef {Object} CloseCdp
 * @property {String} signer
 * @property {String} timestamp
 */
/**
 * OpenCdp
 * @typedef {Object} OpenCdp
 * @property {Array.<StdCoin>} depositAmount
 * @property {String} depositor
 */
/**
 * StdCoin
 * @typedef {Object} StdCoin
 * @property {String} denom
 * @property {String} amount
 */
/**
 * StdFee
 * @typedef {Object} StdFee
 * @property {String} gas
 * @property {Array.<StdCoin>} amount
 */
/**
 * @typedef {Object} StdMsg
 * @property {String} type
 * @property {CloseCdp | OpenCdp} value
 */