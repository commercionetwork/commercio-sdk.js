/**
 * Creates an OpenCdp object.
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
  openCdp['deposited_amount'] = amount;
  openCdp['depositor'] = bech32Address;
  return openCdp;
};

export {
  openCdpFromWallet
};