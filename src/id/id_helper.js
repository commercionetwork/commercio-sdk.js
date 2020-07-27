/**
 * 
 * @param {Array.<DidDocument>} didDocuments
 * @return {Array.<StdMsg>}
 */
function buildSetDidDocumentMsgList(didDocuments) {
  let setDidDocumentMsgList = new Array(didDocuments.length).fill(null).map((ddo) => {
    let ddoMsg = new Object();
    ddoMsg['type'] = "commercio/MsgSetIdentity";
    ddoMsg['value'] = ddo;
    return ddoMsg;
  });

  return setDidDocumentMsgList;
};

export {
  buildSetDidDocumentMsgList
};