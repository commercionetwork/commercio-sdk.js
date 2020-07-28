"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildSendDocumentReceiptMsgList = buildSendDocumentReceiptMsgList;
exports.buildShareDocumentMsgList = buildShareDocumentMsgList;

/**
 * Builds an array of ShareDocument messages.
 * 
 * @param {Array.<CommercioDoc>} shareDocuments
 * @return {Array.<StdMsg>}
 */
function buildShareDocumentMsgList(shareDocuments) {
  var shareDocumentMsgList = new Array(shareDocuments.length).fill(null).map(function (shareDocument) {
    var shareDocumentMsg = new Object();
    shareDocumentMsg['type'] = "commercio/MsgShareDocument";
    shareDocumentMsg['value'] = shareDocument;
    return shareDocumentMsg;
  });
  return shareDocumentMsgList;
}

;
/**
 * Builds an array of SendDocumentReceipt messages.
 * 
 * @param {Array.<CommercioDocReceipt>} sendDocumentReceipts
 * @return {Array.<StdMsg>}
 */

function buildSendDocumentReceiptMsgList(sendDocumentReceipts) {
  var sendDocumentReceiptMsgList = new Array(sendDocumentReceipts.length).fill(null).map(function (sendDocumentReceipt) {
    var sendDocumentReceiptMsg = new Object();
    sendDocumentReceiptMsg['type'] = "commercio/MsgSendDocumentReceipt";
    sendDocumentReceiptMsg['value'] = sendDocumentReceipt;
    return sendDocumentReceiptMsg;
  });
  return sendDocumentReceiptMsgList;
}

;