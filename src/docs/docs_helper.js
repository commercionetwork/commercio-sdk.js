/**
 * Builds an array of ShareDocument messages.
 * 
 * @param {Array.<CommercioDoc>} shareDocuments
 * @return {Array.<StdMsg>}
 */
function buildShareDocumentMsgList(shareDocuments) {
  let shareDocumentMsgList = new Array(shareDocuments.length).fill(null).map((shareDocument) => {
    let shareDocumentMsg = new Object();
    shareDocumentMsg['type'] = "commercio/MsgShareDocument";
    shareDocumentMsg['value'] = shareDocument;
    return shareDocumentMsg;
  });

  return shareDocumentMsgList;
};

/**
 * Builds an array of SendDocumentReceipt messages.
 * 
 * @param {Array.<CommercioDocReceipt>} sendDocumentReceipts
 * @return {Array.<StdMsg>}
 */
function buildSendDocumentReceiptMsgList(sendDocumentReceipts) {
  let sendDocumentReceiptMsgList = new Array(sendDocumentReceipts.length).fill(null).map((sendDocumentReceipt) => {
    let sendDocumentReceiptMsg = new Object();
    sendDocumentReceiptMsg['type'] = "commercio/MsgSendDocumentReceipt";
    sendDocumentReceiptMsg['value'] = sendDocumentReceipt;
    return sendDocumentReceiptMsg;
  });

  return sendDocumentReceiptMsgList;
};

export {
  buildSendDocumentReceiptMsgList,
  buildShareDocumentMsgList
};