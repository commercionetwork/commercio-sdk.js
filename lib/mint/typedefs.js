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
 * @property {String} amount
 * @property {String} denom
 */

/**
 * @typedef {Object} StdMsg
 * @property {String} type
 * @property {CloseCdp | OpenCdp} value
 */
"use strict";