/**
 * Builds an array of SetIdentity messages.
 * 
 * @param {Array.<DidDocument>} didDocuments
 * @return {Array.<StdMsg>}
 */
function buildSetDidDocumentMsgList(didDocuments) {
  let setDidDocumentMsgList = didDocuments.map((ddo) => {
    let ddoMsg = new Object();
    ddoMsg['type'] = "commercio/MsgSetIdentity";
    ddoMsg['value'] = ddo;
    return ddoMsg;
  });

  return setDidDocumentMsgList;
};

/**
 * Builds an array of RequestDidPowerUp messages.
 * 
 * @param {Array.<RequestDidPowerUp>} didPowerUpRequests
 * @return {Array.<StdMsg>}
 */
function buildRequestDidPowerUpMsgList(didPowerUpRequests) {
  let requestDidPowerUpMsgList = didPowerUpRequests.map((didPowerUpRequest) => {
    let didPowerUpRequestMsg = new Object();
    didPowerUpRequestMsg['type'] = "commercio/MsgRequestDidPowerUp";
    didPowerUpRequestMsg['value'] = didPowerUpRequest;
    return didPowerUpRequestMsg;
  });

  return requestDidPowerUpMsgList;
};

export {
  buildRequestDidPowerUpMsgList,
  buildSetDidDocumentMsgList
};