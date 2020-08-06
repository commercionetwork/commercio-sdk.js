"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var forge = require('node-forge');

var hashGenerator = {
  /**
   * Provides SHA-256 message digests.
   * @param {String} message 
   * @return {String}
   */
  getHash256: function getHash256(message) {
    var md = forge.md.sha256.create();
    md.update(message);
    return md.digest().toHex();
  }
};
var _default = hashGenerator;
exports["default"] = _default;