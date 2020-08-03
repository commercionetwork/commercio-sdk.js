import {
  commercioDocFromWallet
} from "../commercio_doc_helper";

describe("docs/commercio_doc_helper/commercioDocFromWallet", () => {
  it("Checks if function 'commercioDocFromWallet' retruns a CommercioDoc", () => {
    const bech32Address = "did:com:1ttxcnevaxlk58u4uuec2n7cm44rk9tsgc8tn6m";
    const recipients = ["did:com:1yq5z4236gmcuus2t940spppwzz8uggpj5ty7ha"];
    const metadataContentUri = "https://example.com/document";
    const metadataSchema = {
      uri: "https://example.com/custom/metadata",
      version: "1.2.3"
    };

    const expectedValue = {
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

    const response = commercioDocFromWallet({
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