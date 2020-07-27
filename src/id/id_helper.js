/**
 * Builds an array of SetIdentity messages.
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

/**
 * Builds an array of RequestDidPowerUp messages.
 * 
 * @param {Array.<RequestDidPowerUp>} didPowerUpRequests
 * @return {Array.<StdMsg>}
 */
function buildRequestDidPowerUpMsgList(didPowerUpRequests) {
  let requestDidPowerUpMsgList = new Array(didPowerUpRequests.length).fill(null).map((didPowerUpRequest) => {
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