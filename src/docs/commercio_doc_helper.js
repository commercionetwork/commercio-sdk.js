import {
  v4 as uuidv4
} from "uuid";

const checksumAlgorithms = {
  MD5: "md5",
  SHA1: "sha-1",
  SHA224: "sha-224",
  SHA256: "sha-256",
  SHA384: "sha-384",
  SHA512: "sha-512"
};

/**
 * Creates a Commercio Doc
 * @param {String} bech32Address
 * @param {Array.<String>} recipients
 * @param {String} contentUri
 * @param {String} metadataContentUri
 * @param {CommercioDocMetadataSchema} metadataSchema
 * @param {String} metadataSchemaType
 * @param {String} checksumValue
 * @param {String} checksumAlgorithm
 * @param {Array.<CommercioDocEncryptionDataKey>} encryptionDataKeys
 * @param {Array.<String>} encryptionDataEncryptedData
 * @param {String} doSignStorageUri
 * @param {String} doSignSignerInstance
 * @param {Array.<String>} doSignSdnData
 * @param {String} doSignVcrId
 * @param {String} doSignCertificateProfile
 * @return {CommercioDoc}
 */
function commercioDocFromWallet({
  bech32Address,
  recipients,
  contentUri,
  metadataContentUri,
  metadataSchema,
  metadataSchemaType,
  checksumValue,
  checksumAlgorithm,
  encryptionDataKeys,
  encryptionDataEncryptedData,
  doSignStorageUri,
  doSignSignerInstance,
  doSignSdnData,
  doSignVcrId,
  doSignCertificateProfile,
}) {
  let commercioDoc = new Object();
  /* SENDER */
  if (!bech32Address) {
    throw new Error("The sender address is manadatory");
  }
  commercioDoc['sender'] = bech32Address;
  /* RECIPIENTS */
  if (!recipients || recipients.length < 1) {
    throw new Error("The list of recipients must contain at least 1 value");
  }
  commercioDoc['recipients'] = recipients;
  /* UUID */
  commercioDoc['uuid'] = uuidv4();
  /* CONTENT URI */
  if (contentUri != null) {
    commercioDoc['content_uri'] = contentUri;
  }
  /* METADATA */
  if (!metadataContentUri) {
    throw new Error("The Metadata ContentUri is mandatory");
  }
  let metadata = _buildMetadata({
    contentUri: metadataContentUri,
    schema: metadataSchema,
    schemaType: metadataSchemaType
  });
  commercioDoc['metadata'] = metadata;
  /* CHECKSUM */
  if (checksumValue != null && checksumAlgorithm != null) {
    let checksum = _buildChecksum({
      value: checksumValue,
      algorithm: checksumAlgorithm
    });
    commercioDoc['checksum'] = checksum;
  }
  /* ENCRYPTION DATA */
  if (encryptionDataKeys != null &&
    encryptionDataKeys.length > 0 &&
    encryptionDataEncryptedData != null &&
    encryptionDataEncryptedData.length > 0) {
    let encryptionData = _buildEncryptionData({
      keys: encryptionDataKeys,
      encryptedData: encryptionDataEncryptedData
    });
    commercioDoc['encryption_data'] = encryptionData;
  }
  /* DOSIGN */
  if (doSignStorageUri != null &&
    doSignSignerInstance != null &&
    doSignVcrId != null &&
    doSignCertificateProfile != null) {
    let doSign = _buildDoSign({
      storageUri: doSignStorageUri,
      signerInstance: doSignSignerInstance,
      sdnData: doSignSdnData,
      vcrId: doSignVcrId,
      certificateProfile: doSignCertificateProfile
    });
    commercioDoc['do_sign'] = doSign;
  }


  return commercioDoc;
};

function _buildMetadata({
  contentUri,
  schema,
  schemaType
}) {
  if ((schema == null && schemaType == null) || (schema != null && schemaType != null)) {
    throw new Error("The schema type and schema fields are mutually exclusive.");
  }

  let metadata = new Object();
  metadata['content_uri'] = contentUri;
  if (schema != null) {
    metadata['schema'] = schema;
  }
  if (schemaType != null) {
    metadata['schema_type'] = schemaType;
  }

  return metadata;
}

function _buildChecksum({
  value,
  algorithm
}) {
  let checkAlgorithm = false;
  switch (algorithm) {
    case checksumAlgorithms.MD5:
      checkAlgorithm = true;
      break;
    case checksumAlgorithms.SHA1:
      checkAlgorithm = true;
      break;
    case checksumAlgorithms.SHA224:
      checkAlgorithm = true;
      break;
    case checksumAlgorithms.SHA256:
      checkAlgorithm = true;
      break;
    case checksumAlgorithms.SHA384:
      checkAlgorithm = true;
      break;
    case checksumAlgorithms.SHA512:
      checkAlgorithm = true;
      break;
    default:
      break;
  }
  if (!checkAlgorithm) {
    throw new Error("This algorithm type is not allowed");
  }

  let checksum = new Object();
  checksum['value'] = value;
  checksum['algorithm'] = algorithm;

  return checksum;
}

function _buildEncryptionData({
  keys,
  encryptedData
}) {
  let encryptionData = new Object();
  encryptionData['keys'] = keys;
  encryptionData['encryptedData'] = encryptedData;

  return encryptionData;
}

function _buildDoSign({
  storageUri,
  signerInstance,
  sdnData,
  vcrId,
  certificateProfile
}) {
  let doSign = new Object();
  doSign['storage_uri'] = storageUri;
  doSign['signer_instance'] = signerInstance;
  if (sdnData != null) {
    doSign['sdn_data'] = sdnData;
  }
  doSign['vcr_id'] = vcrId;
  doSign['certificate_profile'] = certificateProfile;

  return doSign;
}

export {
  commercioDocFromWallet,
  checksumAlgorithms
};