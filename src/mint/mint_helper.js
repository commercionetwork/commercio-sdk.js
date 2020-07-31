/**
 * Builds an array of 1 open CDP message.
 * @param {OpenCdp} openCdp
 * @return {Array.<StdMsg>}
 */
function buildOpenCdpMsgList(openCdp) {
  let openCdpMsg = new Object();
  openCdpMsg['type'] = "commercio/MsgOpenCdp";
  openCdpMsg['value'] = openCdp;
  let openCdpMsgList = [openCdpMsg];
  return openCdpMsgList;
};

/**
 * Builds an array of close CDP messages.
 * @param {Array.<CloseCdp>} closeCdps
 * @return {Array.<StdMsg>}
 */
function buildCloseCdpMsgList(closeCdps) {
  let closeCdpMsgList = closeCdps.map((closeCdp) => {
    let closeCdpMsg = new Object();
    closeCdpMsg['type'] = "commercio/MsgCloseCdp";
    closeCdpMsg['value'] = closeCdp;
    return closeCdpMsg;
  });

  return closeCdpMsgList
};

export {
  buildCloseCdpMsgList,
  buildOpenCdpMsgList
};