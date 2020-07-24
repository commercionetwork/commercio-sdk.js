/**
 * Allows to easily create a CloseCdp object
 * 
 * @param {String} bech32Address
 * @param {String} timeStamp
 * @return {CloseCdp} 
 */
function closeCdpFromWallet({
  bech32Address,
  timeStamp
}) {
  let closeCdp = new Object();
  closeCdp['signer'] = bech32Address;
  closeCdp['cdp_timestamp'] = timeStamp;
  return closeCdp;
};

export {
  closeCdpFromWallet
};