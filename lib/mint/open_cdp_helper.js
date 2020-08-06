"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openCdpFromWallet = openCdpFromWallet;

/**
 * Creates an OpenCdp object.
 * 
 * @param {String} bech32Address
 * @param {Array.<StdCoin>} amount
 * @return {OpenCdp} 
 */
function openCdpFromWallet(_ref) {
  var bech32Address = _ref.bech32Address,
      amount = _ref.amount;
  var openCdp = new Object();
  openCdp['deposited_amount'] = amount;
  openCdp['depositor'] = bech32Address;
  return openCdp;
}

;