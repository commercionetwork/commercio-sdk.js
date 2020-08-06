"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var forge = require('node-forge');

var keysHandler = {
  /**
   * Convert PEM-formatted private key to a Forge private key.
   * @param {String} pemKey
   * @return {String}
   */
  privateKeyFromPem: function privateKeyFromPem(pemKey) {
    return forge.pki.privateKeyFromPem(pemKey);
  },

  /**
   * Convert PEM-formatted public key to a Forge public key.
   * @param {String} pemKey
   * @return {String}
   */
  publicKeyFromPem: function publicKeyFromPem(pemKey) {
    return forge.pki.publicKeyFromPem(pemKey);
  },

  /**
   * Convert the Forge private key to a PEM-formatted private key.
   * @param {*} privateKey 
   * @return {String}
   */
  privateKeyToPem: function privateKeyToPem(privateKey) {
    return forge.pki.privateKeyToPem(privateKey);
  },

  /**
   * Convert the Forge public key to a PEM-formatted public key.
   * @param {*} publicKey 
   * @return {String}
   */
  publicKeyToPem: function publicKeyToPem(publicKey) {
    return forge.pki.publicKeyToPem(publicKey);
  },

  /**
   * Get a Forge public key from the Forge private key.
   * @param {*} privateKey 
   * @return {String}
   */
  publicKeyFromPrivate: function publicKeyFromPrivate(privateKey) {
    return forge.pki.setRsaPublicKey(privateKey.n, privateKey.e);
  }
};
var _default = keysHandler;
exports["default"] = _default;