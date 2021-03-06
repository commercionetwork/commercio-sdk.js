"use strict";

var _did_document_helper = require("../did_document_helper");

describe("id/did_document_helper", function () {
  it("Checks if function 'buildDidDocumentPublicKey' returns a DidDocumentPublicKey", function () {
    var id = "did:com:14zk9u8894eg7fhgw0dsesnqzmlrx85ga9rvnjc#keys-2";
    var type = "RsaSignatureKey2018";
    var controller = "did:com:14zk9u8894eg7fhgw0dsesnqzmlrx85ga9rvnjc";
    var publicKeyPem = "-----BEGIN PUBLIC KEY----MIGfM3TvO3Ku3PJgZ9PO4qRw7+Auyc+zvt2qX+jpwk3wM+m2DbfLjimByzQDIfrzSHMTQ8erL0kg69YsXHYXVX9mIZKRzk6VNwOBOQJSsIDf2jGbuEgI8EB4c3q1XykakCQVvTkCbc9A0GCSqGSIbqd4pNXtgbfbwJGviZ6kQIDAQAB-----END PUBLIC KEY-----\r\n";
    var expectedValue = {
      id: "did:com:14zk9u8894eg7fhgw0dsesnqzmlrx85ga9rvnjc#keys-2",
      type: "RsaSignatureKey2018",
      controller: "did:com:14zk9u8894eg7fhgw0dsesnqzmlrx85ga9rvnjc",
      publicKeyPem: "-----BEGIN PUBLIC KEY----MIGfM3TvO3Ku3PJgZ9PO4qRw7+Auyc+zvt2qX+jpwk3wM+m2DbfLjimByzQDIfrzSHMTQ8erL0kg69YsXHYXVX9mIZKRzk6VNwOBOQJSsIDf2jGbuEgI8EB4c3q1XykakCQVvTkCbc9A0GCSqGSIbqd4pNXtgbfbwJGviZ6kQIDAQAB-----END PUBLIC KEY-----\r\n"
    };
    var response = (0, _did_document_helper.buildDidDocumentPublicKey)({
      id: id,
      type: type,
      controller: controller,
      publicKeyPem: publicKeyPem
    });
    expect(response).toStrictEqual(expectedValue);
  });
  it("Checks if function 'buildDidDocumentProofSignatureContent' returns a DidDocumentProofSignatureContent", function () {
    var context = "https://www.w3.org/ns/did/v1";
    var did = "did:com:14zk9u8894eg7fhgw0dsesnqzmlrx85ga9rvnjc";
    var publicKeys = [{
      "id": "did:com:14zk9u8894eg7fhgw0dsesnqzmlrx85ga9rvnjc#keys-1",
      "type": "RsaVerificationKey2018",
      "controller": "did:com:14zk9u8894eg7fhgw0dsesnqzmlrx85ga9rvnjc",
      "publicKeyPem": "-----BEGIN PUBLIC KEY----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDMr3V+Auyc+zvt2qX+jpwk3wM+m2DbfLjimByzQDIfrzSHMTQ8erL0kg69YsXHYXVX9mIZKRzk6VNwOBOQJSsIDf2jGbuEgI8EB4c3q1XykakCTvO3Ku3PJgZ9PO4qRw7QVvTkCbc91rT93/pD3/Ar8wqd4pNXtgbfbwJGviZ6kQIDAQAB-----END PUBLIC KEY-----\r\n"
    }, {
      "id": "did:com:14zk9u8894eg7fhgw0dsesnqzmlrx85ga9rvnjc#keys-2",
      "type": "RsaSignatureKey2018",
      "controller": "did:com:14zk9u8894eg7fhgw0dsesnqzmlrx85ga9rvnjc",
      "publicKeyPem": "-----BEGIN PUBLIC KEY----MIGfM3TvO3Ku3PJgZ9PO4qRw7+Auyc+zvt2qX+jpwk3wM+m2DbfLjimByzQDIfrzSHMTQ8erL0kg69YsXHYXVX9mIZKRzk6VNwOBOQJSsIDf2jGbuEgI8EB4c3q1XykakCQVvTkCbc9A0GCSqGSIbqd4pNXtgbfbwJGviZ6kQIDAQAB-----END PUBLIC KEY-----\r\n"
    }];
    var expectedValue = {
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
      }]
    };
    var response = (0, _did_document_helper.buildDidDocumentProofSignatureContent)({
      context: context,
      did: did,
      publicKeys: publicKeys
    });
    expect(response).toStrictEqual(expectedValue);
  });
  it("Checks if function 'didDocumentFromWallet' returns a DidDocument", function () {
    var context = "https://www.w3.org/ns/did/v1";
    var did = "did:com:14zk9u8894eg7fhgw0dsesnqzmlrx85ga9rvnjc";
    var publicKeys = [{
      id: "did:com:14zk9u8894eg7fhgw0dsesnqzmlrx85ga9rvnjc#keys-1",
      type: "RsaVerificationKey2018",
      controller: "did:com:14zk9u8894eg7fhgw0dsesnqzmlrx85ga9rvnjc",
      publicKeyPem: "-----BEGIN PUBLIC KEY----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDMr3V+Auyc+zvt2qX+jpwk3wM+m2DbfLjimByzQDIfrzSHMTQ8erL0kg69YsXHYXVX9mIZKRzk6VNwOBOQJSsIDf2jGbuEgI8EB4c3q1XykakCTvO3Ku3PJgZ9PO4qRw7QVvTkCbc91rT93/pD3/Ar8wqd4pNXtgbfbwJGviZ6kQIDAQAB-----END PUBLIC KEY-----\r\n"
    }, {
      id: "did:com:14zk9u8894eg7fhgw0dsesnqzmlrx85ga9rvnjc#keys-2",
      type: "RsaSignatureKey2018",
      controller: "did:com:14zk9u8894eg7fhgw0dsesnqzmlrx85ga9rvnjc",
      publicKeyPem: "-----BEGIN PUBLIC KEY----MIGfM3TvO3Ku3PJgZ9PO4qRw7+Auyc+zvt2qX+jpwk3wM+m2DbfLjimByzQDIfrzSHMTQ8erL0kg69YsXHYXVX9mIZKRzk6VNwOBOQJSsIDf2jGbuEgI8EB4c3q1XykakCQVvTkCbc9A0GCSqGSIbqd4pNXtgbfbwJGviZ6kQIDAQAB-----END PUBLIC KEY-----\r\n"
    }];
    var bech32PublicKey = "<did bech32 pubkey>";
    var signatureValue = "QNB13Y7Q91tzjn4w==";
    var expectedValue = {
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
    };
    var response = (0, _did_document_helper.didDocumentFromWallet)({
      context: context,
      did: did,
      publicKeys: publicKeys,
      bech32PublicKey: bech32PublicKey,
      signatureValue: signatureValue
    });
    expect(response['@context']).toBe(expectedValue['@context']);
    expect(response.id).toBe(expectedValue.id);
    expect(response.publicKey).toStrictEqual(expectedValue.publicKey);
    expect(response.proof.type).toBe(expectedValue.proof.type);
    expect(response.proof.proofPurpose).toBe(expectedValue.proof.proofPurpose);
    expect(response.proof.controller).toBe(expectedValue.proof.controller);
    expect(response.proof.verificationMethod).toBe(expectedValue.proof.verificationMethod);
    expect(response.proof.signatureValue).toBe(expectedValue.proof.signatureValue);
  });
});