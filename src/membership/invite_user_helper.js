/**
 * Creates an InviteUser object.
 * @param {String} recipient 
 * @param {String} sender
 * @return {InviteUser}
 */
function inviteUserFromWallet({
  recipient,
  sender
}) {
  let inviteUser = new Object();
  inviteUser['recipient'] = recipient;
  inviteUser['sender'] = sender;
  return inviteUser;
};

export {
  inviteUserFromWallet
};