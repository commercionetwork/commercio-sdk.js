/**
 * @typedef {Object} CommercioDoc
 * @property {String} sender
 * @property {Array.<String>} recipients
 * @property {String} uuid
 * @property {String} content_uri
 * @property {CommercioDocMetadata} metadata
 * @property {CommercioDocChecksum} checksum
 * @property {CommercioDocEncryptionData} encryption_data
 * @property {CommercioDoSign} do_sign
 */

/**
 * @typedef {Object} CommercioDocMetadata
 * @property {String} content_uri
 * @property {CommercioDocMetadataSchema} schema
 * @property {String} schema_type
 */

/**
 * @typedef {Object} CommercioDocMetadataSchema
 * @property {String} uri
 * @property {String} version
 */

/**
 * @typedef {Object} CommercioDocChecksum
 * @property {String} value
 * @property {String} algorithm
 */

/**
 * @typedef {Object} CommercioDocEncryptionData
 * @property {Array.<CommercioDocEncryptionDataKey>} keys
 * @property {Array.<String>} encrypted_data
 */

/**
 * @typedef {Object} CommercioDocEncryptionDataKey
 * @property {String} recipient
 * @property {String} value
 */

/**
 * @typedef {Object} CommercioDoSign
 * @property {String} storage_uri
 * @property {String} signer_instance
 * @property {Array.<String>} sdn_data
 * @property {String} vcr_id
 * @property {String} certificate_profile
 */

/**
 * @typedef {Object} CommercioDocReceipt
 * @property {String} uuid
 * @property {String} sender
 * @property {String} recipient
 * @property {String} tx_hash
 * @property {String} document_uuid
 * @property {String} proof
 */

/**
 * @typedef {Object} StdMsg
 * @property {String} type
 * @property {CommercioDoc | CommercioDocReceipt} value
 */
"use strict";