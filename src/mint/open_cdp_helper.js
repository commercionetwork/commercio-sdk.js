/**
 * Allows to easily create a OpenCdp object
 * 
 * @param {String} bech32Address
 * @param {Array.<StdCoin>} amount
 * @return {OpenCdp} 
 */
function openCdpFromWallet({
  bech32Address,
  amount
}) {
  let openCdp = new Object();
  openCdp['deposit_amount'] = amount;
  openCdp['depositor'] = bech32Address;
  return openCdp;
};

export {
  openCdpFromWallet
};