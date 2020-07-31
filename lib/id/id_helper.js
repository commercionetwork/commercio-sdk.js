"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildRequestDidPowerUpMsgList = buildRequestDidPowerUpMsgList;
exports.buildSetDidDocumentMsgList = buildSetDidDocumentMsgList;

/**
 * Builds an array of SetIdentity messages.
 * 
 * @param {Array.<DidDocument>} didDocuments
 * @return {Array.<StdMsg>}
 */
function buildSetDidDocumentMsgList(didDocuments) {
  var setDidDocumentMsgList = didDocuments.forEach(function (ddo) {
    var ddoMsg = new Object();
    ddoMsg['type'] = "commercio/MsgSetIdentity";
    ddoMsg['value'] = ddo;
    return ddoMsg;
  });
  return setDidDocumentMsgList;
}

;
/**
 * Builds an array of RequestDidPowerUp messages.
 * 
 * @param {Array.<RequestDidPowerUp>} didPowerUpRequests
 * @return {Array.<StdMsg>}
 */

function buildRequestDidPowerUpMsgList(didPowerUpRequests) {
  var requestDidPowerUpMsgList = didPowerUpRequests.forEach(function (didPowerUpRequest) {
    var didPowerUpRequestMsg = new Object();
    didPowerUpRequestMsg['type'] = "commercio/MsgRequestDidPowerUp";
    didPowerUpRequestMsg['value'] = didPowerUpRequest;
    return didPowerUpRequestMsg;
  });
  return requestDidPowerUpMsgList;
}

;