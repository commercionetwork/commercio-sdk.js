"use strict";

var _commercio_doc_helper = require("../commercio_doc_helper");

describe("docs/commercio_doc_helper", function () {
  it("Checks if function 'commercioDocFromWallet' returns a CommercioDoc", function () {
    var bech32Address = "did:com:1ttxcnevaxlk58u4uuec2n7cm44rk9tsgc8tn6m";
    var recipients = ["did:com:1yq5z4236gmcuus2t940spppwzz8uggpj5ty7ha"];
    var metadataContentUri = "https://example.com/document";
    var metadataSchema = {
      uri: "https://example.com/custom/metadata",
      version: "1.2.3"
    };
    var expectedValue = {
      sender: "did:com:1ttxcnevaxlk58u4uuec2n7cm44rk9tsgc8tn6m",
      recipients: ["did:com:1yq5z4236gmcuus2t940spppwzz8uggpj5ty7ha"],
      metadata: {
        content_uri: "https://example.com/document",
        schema: {
          uri: "https://example.com/custom/metadata",
          version: "1.2.3"
        }
      }
    };
    var response = (0, _commercio_doc_helper.commercioDocFromWallet)({
      bech32Address: bech32Address,
      recipients: recipients,
      metadataContentUri: metadataContentUri,
      metadataSchema: metadataSchema
    });
    expect(response.sender).toBe(expectedValue.sender);
    expect(response.recipients).toStrictEqual(expectedValue.recipients);
    expect(response.metadata).toStrictEqual(expectedValue.metadata);
    expect(response.uuid).toHaveLength(36);
  });
});