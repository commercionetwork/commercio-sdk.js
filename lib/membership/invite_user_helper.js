"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inviteUserFromWallet = inviteUserFromWallet;

/**
 * Allows to easily create a InviteUser object
 * 
 * @param {String} recipient 
 * @param {String} sender
 * @return {InviteUser}
 */
function inviteUserFromWallet(_ref) {
  var recipient = _ref.recipient,
      sender = _ref.sender;
  var inviteUser = new Object();
  inviteUser['recipient'] = recipient;
  inviteUser['sender'] = sender;
  return inviteUser;
}

;