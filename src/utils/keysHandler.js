const forge = require('node-forge');

const keysHandler = {
  /**
   * Convert PEM-formatted private key to a Forge private key
   * @param {String} pemKey 
   */
  privateKeyFromPem(pemKey) {
    return forge.pki.privateKeyFromPem(pemKey);
  },
  /**
   * Convert PEM-formatted public key to a Forge public key
   * @param {String} pemKey
   */
  publicKeyFromPem(pemKey) {
    return forge.pki.publicKeyFromPem(pemKey);
  },
  /**
   * Convert the Forge private key to a PEM-formatted private key
   * @param {*} privateKey 
   */
  privateKeyToPem(privateKey) {
    return forge.pki.privateKeyToPem(privateKey);
  },
  /**
   * Convert the Forge public key to a PEM-formatted public key
   * @param {*} publicKey 
   */
  publicKeyToPem(publicKey) {
    return forge.pki.publicKeyToPem(publicKey);
  },
  /**
   * Get a Forge public key from the Forge private key
   * @param {*} privateKey 
   */
  publicKeyFromPrivate(privateKey) {
    return forge.pki.setRsaPublicKey(privateKey.n, privateKey.e);
  }
};

export default keysHandler;