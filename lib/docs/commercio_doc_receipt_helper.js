"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commercioDocReceiptFromWallet = commercioDocReceiptFromWallet;

var _uuid = require("uuid");

/**
 * Creates a Commercio Doc receipt
 * @param {String} sender 
 * @param {String} recipient 
 * @param {String} txHash 
 * @param {String} documentUuid 
 * @param {String} proof
 * @return {CommercioDocReceipt}
 */
function commercioDocReceiptFromWallet(_ref) {
  var sender = _ref.sender,
      recipient = _ref.recipient,
      txHash = _ref.txHash,
      documentUuid = _ref.documentUuid,
      proof = _ref.proof;
  var commercioDocReceipt = new Object();
  commercioDocReceipt['uuid'] = (0, _uuid.v4)();
  commercioDocReceipt['sender'] = sender;
  commercioDocReceipt['recipient'] = recipient;
  commercioDocReceipt['tx_hash'] = txHash;
  commercioDocReceipt['document_uuid'] = documentUuid;

  if (proof != null) {
    commercioDocReceipt['proof'] = proof;
  }

  return commercioDocReceipt;
}

;