/**
 * Builds an open CDP message.
 * @param {OpenCdp} openCdp
 * @return {StdMsg}
 */
function buildOpenCdpMsg(openCdp) {
  let openCdpMsg = new Object();
  openCdpMsg.type = "commercio/MsgOpenCdp";
  openCdpMsg.value = openCdp;
  return openCdpMsg;
};

/**
 * Builds a close CDP message.
 * @param {CloseCdp} closeCdp
 * @return {StdMsg}
 */
function buildCloseCdpMsg(closeCdp) {
  let closeCdpMsg = new Object();
  closeCdpMsg.type = "commercio/MsgCloseCdp";
  closeCdpMsg.value = closeCdp;
  return closeCdpMsg;
};

export {
  buildCloseCdpMsg,
  buildOpenCdpMsg
};