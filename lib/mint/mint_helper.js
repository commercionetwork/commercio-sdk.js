"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildCloseCdpMsgList = buildCloseCdpMsgList;
exports.buildOpenCdpMsgList = buildOpenCdpMsgList;

/**
 * Builds an array of 1 open CDP message.
 * @param {OpenCdp} openCdp
 * @return {Array.<StdMsg>}
 */
function buildOpenCdpMsgList(openCdp) {
  var openCdpMsg = new Object();
  openCdpMsg['type'] = "commercio/MsgOpenCdp";
  openCdpMsg['value'] = openCdp;
  var openCdpMsgList = new Array(1).fill(openCdpMsg);
  return openCdpMsgList;
}

;
/**
 * Builds an array of close CDP messages.
 * @param {Array.<CloseCdp>} closeCdps
 * @return {Array.<StdMsg>}
 */

function buildCloseCdpMsgList(closeCdps) {
  var closeCdpMsgList = new Array(closeCdps.length).fill(null).map(function (closeCdp) {
    var closeCdpMsg = new Object();
    closeCdpMsg['type'] = "commercio/MsgCloseCdp";
    closeCdpMsg['value'] = closeCdp;
    return closeCdpMsg;
  });
  return closeCdpMsgList;
}

;