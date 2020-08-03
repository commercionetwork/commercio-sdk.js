"use strict";

var _commercio_doc_receipt_helper = require("../commercio_doc_receipt_helper");

describe("docs/commercio_doc_receipt_helper", function () {
  it("Checks if function 'commercioDocReceiptFromWallet' returns a CommercioDocReceipt", function () {
    var sender = "did:com:1yq5z4236gmcuus2t940spppwzz8uggpj5ty7ha";
    var recipient = "did:com:1ttxcnevaxlk58u4uuec2n7cm44rk9tsgc8tn6m";
    var txHash = "CD025E0DE8337BF7ACC8331BA0A48742C80F4CB7DFD3759F99BE52A6C8762C72";
    var documentUuid = "be98a022-142e-4b99-adeb-3d0fac9986cf";
    var expectedValue = {
      sender: "did:com:1yq5z4236gmcuus2t940spppwzz8uggpj5ty7ha",
      recipient: "did:com:1ttxcnevaxlk58u4uuec2n7cm44rk9tsgc8tn6m",
      tx_hash: "CD025E0DE8337BF7ACC8331BA0A48742C80F4CB7DFD3759F99BE52A6C8762C72",
      document_uuid: "be98a022-142e-4b99-adeb-3d0fac9986cf"
    };
    var response = (0, _commercio_doc_receipt_helper.commercioDocReceiptFromWallet)({
      sender: sender,
      recipient: recipient,
      txHash: txHash,
      documentUuid: documentUuid
    });
    expect(response.uuid).toHaveLength(36);
    expect(response.sender).toBe(expectedValue.sender);
    expect(response.recipient).toBe(expectedValue.recipient);
    expect(response.tx_hash).toBe(expectedValue.tx_hash);
    expect(response.document_uuid).toBe(expectedValue.document_uuid);
  });
});