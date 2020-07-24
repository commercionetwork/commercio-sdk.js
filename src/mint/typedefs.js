/**
 * @typedef {Object} CloseCdp
 * @property {String} signer
 * @property {String} timestamp
 */
/**
 * @typedef {Object} OpenCdp
 * @property {Array.<StdCoin>} depositAmount
 * @property {String} depositor
 */
/**
 * @typedef {Object} StdCoin
 * @property {String} denom
 * @property {String} amount
 */
/**
 * @typedef {Object} StdFee
 * @property {String} gas
 * @property {Array.<StdCoin>} amount
 */
/**
 * @typedef {Object} StdMsg
 * @property {String} type
 * @property {CloseCdp | OpenCdp} value
 */