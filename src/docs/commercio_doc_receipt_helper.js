import {
  v4 as uuidv4
} from "uuid";

/**
 * Creates a Commercio Doc receipt
 * @param {String} uuid 
 * @param {String} sender 
 * @param {String} recipient 
 * @param {String} txHash 
 * @param {String} documentUuid 
 * @param {String} proof
 * @return {CommercioDocReceipt}
 */
function commercioDocReceiptFromWallet({
  sender,
  recipient,
  txHash,
  documentUuid,
  proof
}) {
  let commercioDocReceipt = new Object();
  commercioDocReceipt['uuid'] = uuidv4();
  commercioDocReceipt['sender'] = sender;
  commercioDocReceipt['recipient'] = recipient;
  commercioDocReceipt['tx_hash'] = txHash;
  commercioDocReceipt['document_uuid'] = documentUuid;
  if (proof != null) {
    commercioDocReceipt['proof'] = proof;
  }

  return commercioDocReceipt;
};

export {
  commercioDocReceiptFromWallet
};