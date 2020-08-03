"use strict";

var _docs_helper = require("../docs_helper");

describe("docs/docs_helper", function () {
  it("Checks if function 'buildSendDocumentReceiptMsgList' returns an array of 'commercio/MsgSendDocumentReceipt'", function () {
    var commercioDocReceipts = [{
      uuid: "<Unique receipt identifier>",
      sender: "<Document sender address>",
      recipient: "<Document recipient address>",
      tx_hash: "<Tx hash in which the document has been sent>",
      document_uuid: "<Document UUID>",
      proof: "<Optional reading proof>"
    }];
    var expectedValue = [{
      type: "commercio/MsgSendDocumentReceipt",
      value: {
        uuid: "<Unique receipt identifier>",
        sender: "<Document sender address>",
        recipient: "<Document recipient address>",
        tx_hash: "<Tx hash in which the document has been sent>",
        document_uuid: "<Document UUID>",
        proof: "<Optional reading proof>"
      }
    }];
    var response = (0, _docs_helper.buildSendDocumentReceiptMsgList)(commercioDocReceipts);
    expect(response).toStrictEqual(expectedValue);
  });
  it("Checks if function 'buildShareDocumentMsgList' returns an array of 'commercio/MsgShareDocument'", function () {
    var commercioDocs = [{
      sender: "<Sender Did>",
      recipients: ["<Recipient did>"],
      uuid: "<Document UUID>",
      content_uri: "<Document content URI>",
      metadata: {
        content_uri: "<Metadata content URI>",
        schema: {
          uri: "<Metadata schema definition URI>",
          version: "<Metadata schema version>"
        },
        schema_type: "<Metadata schema type>"
      },
      checksum: {
        value: "<Document content checksum value>",
        algorithm: "<Document content checksum algorithm>"
      },
      encryption_data: {
        keys: [{
          recipient: "<Recipient address>",
          value: "<Encrypted and encoded symmetric key value>"
        }],
        encrypted_data: ["<Encrypted field identifier>"]
      },
      do_sign: {
        storage_uri: "uri://storage",
        signer_instance: "did S",
        sdn_data: ["common_name", "surname", "serial_number", "given_name", "organization", "country"],
        vcr_id: "<identity VCR Identifier",
        certificate_profile: "<one of the profiles supported by S>"
      }
    }];
    var expectedValue = [{
      type: "commercio/MsgShareDocument",
      value: {
        sender: "<Sender Did>",
        recipients: ["<Recipient did>"],
        uuid: "<Document UUID>",
        content_uri: "<Document content URI>",
        metadata: {
          content_uri: "<Metadata content URI>",
          schema: {
            uri: "<Metadata schema definition URI>",
            version: "<Metadata schema version>"
          },
          schema_type: "<Metadata schema type>"
        },
        checksum: {
          value: "<Document content checksum value>",
          algorithm: "<Document content checksum algorithm>"
        },
        encryption_data: {
          keys: [{
            recipient: "<Recipient address>",
            value: "<Encrypted and encoded symmetric key value>"
          }],
          encrypted_data: ["<Encrypted field identifier>"]
        },
        do_sign: {
          storage_uri: "uri://storage",
          signer_instance: "did S",
          sdn_data: ["common_name", "surname", "serial_number", "given_name", "organization", "country"],
          vcr_id: "<identity VCR Identifier",
          certificate_profile: "<one of the profiles supported by S>"
        }
      }
    }];
    var response = (0, _docs_helper.buildShareDocumentMsgList)(commercioDocs);
    expect(response).toStrictEqual(expectedValue);
  });
});