"use strict";

var _id_helper = require("../id_helper");

describe("id/id__helper", function () {
  it("Checks if function 'buildRequestDidPowerUpMsgList' returns an array of 'commercio/MsgRequestDidPowerUp'", function () {
    var didPowerUpRequests = [{
      claimant: "address that sent funds to the centralized entity before",
      amount: [{
        denom: "ucommercio",
        amount: "amount to transfer to the pairwise did, integer"
      }],
      proof: "proof string",
      id: "randomly-generated UUID v4",
      proof_key: "proof encryption key"
    }];
    var expectedValue = [{
      type: "commercio/MsgRequestDidPowerUp",
      value: {
        claimant: "address that sent funds to the centralized entity before",
        amount: [{
          denom: "ucommercio",
          amount: "amount to transfer to the pairwise did, integer"
        }],
        proof: "proof string",
        id: "randomly-generated UUID v4",
        proof_key: "proof encryption key"
      }
    }];
    var response = (0, _id_helper.buildRequestDidPowerUpMsgList)(didPowerUpRequests);
    expect(response).toStrictEqual(expectedValue);
  });
  it("Checks if function 'buildSetDidDocumentMsgList' returns an array of 'commercio/MsgSetIdentity'", function () {
    var didDocuments = [{
      "@context": "https://www.w3.org/ns/did/v1",
      id: "did:com:14zk9u8894eg7fhgw0dsesnqzmlrx85ga9rvnjc",
      publicKey: [{
        id: "did:com:14zk9u8894eg7fhgw0dsesnqzmlrx85ga9rvnjc#keys-1",
        type: "RsaVerificationKey2018",
        controller: "did:com:14zk9u8894eg7fhgw0dsesnqzmlrx85ga9rvnjc",
        publicKeyPem: "-----BEGIN PUBLIC KEY----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDMr3V+Auyc+zvt2qX+jpwk3wM+m2DbfLjimByzQDIfrzSHMTQ8erL0kg69YsXHYXVX9mIZKRzk6VNwOBOQJSsIDf2jGbuEgI8EB4c3q1XykakCTvO3Ku3PJgZ9PO4qRw7QVvTkCbc91rT93/pD3/Ar8wqd4pNXtgbfbwJGviZ6kQIDAQAB-----END PUBLIC KEY-----\r\n"
      }, {
        id: "did:com:14zk9u8894eg7fhgw0dsesnqzmlrx85ga9rvnjc#keys-2",
        type: "RsaSignatureKey2018",
        controller: "did:com:14zk9u8894eg7fhgw0dsesnqzmlrx85ga9rvnjc",
        publicKeyPem: "-----BEGIN PUBLIC KEY----MIGfM3TvO3Ku3PJgZ9PO4qRw7+Auyc+zvt2qX+jpwk3wM+m2DbfLjimByzQDIfrzSHMTQ8erL0kg69YsXHYXVX9mIZKRzk6VNwOBOQJSsIDf2jGbuEgI8EB4c3q1XykakCQVvTkCbc9A0GCSqGSIbqd4pNXtgbfbwJGviZ6kQIDAQAB-----END PUBLIC KEY-----\r\n"
      }],
      proof: {
        type: "EcdsaSecp256k1VerificationKey2019",
        created: "2019-02-08T16:02:20Z",
        proofPurpose: "authentication",
        controller: "did:com:14zk9u8894eg7fhgw0dsesnqzmlrx85ga9rvnjc",
        verificationMethod: "<did bech32 pubkey>",
        signatureValue: "QNB13Y7Q91tzjn4w=="
      }
    }];
    var expectedValue = [{
      type: "commercio/MsgSetIdentity",
      value: {
        "@context": "https://www.w3.org/ns/did/v1",
        id: "did:com:14zk9u8894eg7fhgw0dsesnqzmlrx85ga9rvnjc",
        publicKey: [{
          id: "did:com:14zk9u8894eg7fhgw0dsesnqzmlrx85ga9rvnjc#keys-1",
          type: "RsaVerificationKey2018",
          controller: "did:com:14zk9u8894eg7fhgw0dsesnqzmlrx85ga9rvnjc",
          publicKeyPem: "-----BEGIN PUBLIC KEY----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDMr3V+Auyc+zvt2qX+jpwk3wM+m2DbfLjimByzQDIfrzSHMTQ8erL0kg69YsXHYXVX9mIZKRzk6VNwOBOQJSsIDf2jGbuEgI8EB4c3q1XykakCTvO3Ku3PJgZ9PO4qRw7QVvTkCbc91rT93/pD3/Ar8wqd4pNXtgbfbwJGviZ6kQIDAQAB-----END PUBLIC KEY-----\r\n"
        }, {
          id: "did:com:14zk9u8894eg7fhgw0dsesnqzmlrx85ga9rvnjc#keys-2",
          type: "RsaSignatureKey2018",
          controller: "did:com:14zk9u8894eg7fhgw0dsesnqzmlrx85ga9rvnjc",
          publicKeyPem: "-----BEGIN PUBLIC KEY----MIGfM3TvO3Ku3PJgZ9PO4qRw7+Auyc+zvt2qX+jpwk3wM+m2DbfLjimByzQDIfrzSHMTQ8erL0kg69YsXHYXVX9mIZKRzk6VNwOBOQJSsIDf2jGbuEgI8EB4c3q1XykakCQVvTkCbc9A0GCSqGSIbqd4pNXtgbfbwJGviZ6kQIDAQAB-----END PUBLIC KEY-----\r\n"
        }],
        proof: {
          type: "EcdsaSecp256k1VerificationKey2019",
          created: "2019-02-08T16:02:20Z",
          proofPurpose: "authentication",
          controller: "did:com:14zk9u8894eg7fhgw0dsesnqzmlrx85ga9rvnjc",
          verificationMethod: "<did bech32 pubkey>",
          signatureValue: "QNB13Y7Q91tzjn4w=="
        }
      }
    }];
    var response = (0, _id_helper.buildSetDidDocumentMsgList)(didDocuments);
    expect(response).toStrictEqual(expectedValue);
  });
});