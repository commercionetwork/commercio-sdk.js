# Commercio-SDK.js

![GitHub release](https://img.shields.io/github/release/commercionetwork/commercio-sdk.js?include_prereleases)
![GitHub license](https://img.shields.io/github/license/commercionetwork/commercio-sdk.js)
![GitHub top language](https://img.shields.io/github/languages/top/commercionetwork/commercio-sdk.js)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/commercionetwork/commercio-sdk.js)

[![NPM](https://nodei.co/npm/@commercio.network/commercio-sdk.js.png?mini=true)](https://nodei.co/npm/@commercio.network/commercio-sdk.js/)

This repository contains the code of the Javascript Commercio SDK.

## Helper methods

Inside the SDK you will find the following helper methods that will help you compose messages to perform almost all operations on the blockchain of Commercio.network.

***N.B.: this SDK does not include the "Sacco" library, therefore the features of the other Commercio.network SDKs that use Sacco are not available.***

### Docs

- *commercioDocFromWallet*, creates a Commercio Doc.
- *buildShareDocumentMsgList*, builds an array of ShareDocument messages.
- *commercioDocReceiptFromWallet*, creates a Commercio Doc receipt.
- *buildSendDocumentReceiptMsgList*, builds an array of SendDocumentReceipt messages.

Example to share a document:

```js
let commercioDoc = commercioDocFromWallet({
  bech32Address: "<Sender Did>",
  recipients: [
    "<Recipient did>"
  ],
  metadataContentUri: "<Metadata content URI>",
  metadataSchema: {
    uri: "<Metadata schema definition URI>",
    version: "<Metadata schema version>"
  }
});
let shareDocumentMsgList = buildShareDocumentMsgList([commercioDoc]);
```

Example to send a receipt for a document

```js
let commercioDocReceipt = commercioDocReceiptFromWallet({
  sender: "<Document sender address>",
  recipient: "<Document recipient address>",
  txHash: "<Tx hash in which the document has been sent>",
  documentUuid: "<Document UUID>"
});
let sendDocumentReceiptMsgList = buildSendDocumentReceiptMsgList([commercioDocReceipt]);
```

### Id

- *didDocumentFromWallet*, creates a DDO.
- *buildDidDocumentProofSignatureContent*, builds the proof signature content of DDO.
- *buildDidDocumentPublicKey*, builds a DDO public key.
- *buildSetDidDocumentMsgList*, builds an array of SetIdentity messages.
- *didPowerUpfromWallet*, creates a Did PowerUp.
- *buildRequestDidPowerUpMsgList*, builds an array of RequestDidPowerUp messages.

Example to set a DDO:

```js
let publicKeyVerification = buildDidDocumentPublicKey({
  id: "<user Did plus suffix #keys-1>",
  type: "RsaVerificationKey2018",
  controller: "<user Did>",
  publicKeyPem: "<public Pem key>"
});
let publicKeySignature = buildDidDocumentPublicKey({
  id: "<user Did plus suffix #keys-2>",
  type: "RsaSignatureKey2018",
  controller: "<user Did>",
  publicKeyPem: "<public Pem key>"
});
let didDocumentProofSignatureContent = buildDidDocumentProofSignatureContent({
  context: "https://www.w3.org/ns/did/v1",
  did: "<user did>",
  publicKeys: [publicKeyVerification, publicKeySignature]
});

// Create the 'signatureValue' following these instructions: https://docs.commercio.network/x/id/#associating-a-did-document-to-your-identity

let didDocument = didDocumentFromWallet({
  context: didDocumentProofSignatureContent['@context'],
  did: didDocumentProofSignatureContent['id'],
  publicKeys: didDocumentProofSignatureContent['publicKey'],
  bech32PublicKey: "<did bech32 pubkey>",
  signatureValue: "<the 'signatureValue' previously generated>",
  purpose: "<the proof purpose>"
});
let setDidDocumentMsgList = buildSetDidDocumentMsgList([didDocument]);
```

Example to request a PowerUp:

```js
let didPowerUp = didPowerUpfromWallet({
  senderDid: "<user who sends the power-up request>",
  pairwiseDid: "<pairwise address to power-up>",
  amount: "<Amount to be sent>",
  privateKey: "<private RSA key of sender>",
  governmentRsaPubKey: "<public key of external centralized entity Tk>"
});
let requestDidPowerUpMsgList = buildRequestDidPowerUpMsgList([didPowerUp]);
```

### Membership

- *inviteUserFromWallet*, creates an Invite User.
- *buildInviteUserMsgList*, builds an array of InviteUser messages.
- *buyMembershipFromWallet*, creates a Buy Membership.
- *buildBuyMembershipMsgList*, builds an array of BuyMembership messages.

Example to invire a user:

```js
let inviteUser = inviteUserFromWallet({
  recipient: "<address of the user to be invited>",
  sender: "<your address>"
});
let inviteUserMsgList = buildInviteUserMsgList([inviteUser]);
```

Example to buy a membership:

```js
import { memberhipTypes } from "@commercio.network/commercio-sdk.js";

let buyMembership = buyMembershipFromWallet({
  bech32Address: "<your address>",
  membershipType: memberhipTypes.BLACK
});
let buyMembershipMsgList = buildBuyMembershipMsgList([buyMembership]);
```

### Mint

- *openCdpFromWallet*, creates an OpenCdp.
- *buildOpenCdpMsgList*, builds an array of 1 open CDP message.
- *buildCloseCdpMsgList*, creates a CloseCdp.
- *closeCdpFromWallet*, builds an array of close CDP messages.

Example to open a CDP:

```js
let openCdp = openCdpFromWallet({
  bech32Address: "<user address>",
  amount: "<amount to be deposited>"
});
let openCdpMsgList = buildOpenCdpMsgList(openCdp);
```

Example to close a CDP:

```js
let closeCdp = closeCdpFromWallet({
  bech32Address: "<user address>",
  timeStamp: "<block height at which the CDP is being inserted into the chain>"
});
let closeCdpMsgList = buildCloseCdpMsgList([closeCdp]);
```

### Utilities

- *hashGenerator*, to get message hash:
  - *getHash256*
- *keysHandler*, to manage RSA keys:
  - *privateKeyFromPem*
  - *publicKeyFromPem*
  - *privateKeyToPem*
  - *publicKeyToPem*
  - *publicKeyFromPrivate*

## References

*Commercio-sdk.js* uses [node-forge](https://www.npmjs.com/package/node-forge) to perform encryption operations.

## How to build and publish the library

```sh
# update the version number
npm run build
npm login
npm publish
```

### Reference guide

[How to publish a npm package](https://www.robinwieruch.de/publish-npm-package-node)
