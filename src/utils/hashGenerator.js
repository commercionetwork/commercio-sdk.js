const forge = require('node-forge');

const hashGenerator = {
  /**
   * Provides SHA-256 message digests.
   * @param {String} message 
   */
  getHash256(message) {
    let md = forge.md.sha256.create();
    md.update(message);
    return md.digest().toHex();
  }
};

export default hashGenerator;