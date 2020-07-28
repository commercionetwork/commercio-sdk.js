/**
 * Creates a CloseCdp.
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