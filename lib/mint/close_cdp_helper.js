"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closeCdpFromWallet = closeCdpFromWallet;

/**
 * Creates a CloseCdp object.
 * 
 * @param {String} bech32Address
 * @param {String} timeStamp
 * @return {CloseCdp} 
 */
function closeCdpFromWallet(_ref) {
  var bech32Address = _ref.bech32Address,
      timeStamp = _ref.timeStamp;
  var closeCdp = new Object();
  closeCdp['signer'] = bech32Address;
  closeCdp['timestamp'] = timeStamp;
  return closeCdp;
}

;