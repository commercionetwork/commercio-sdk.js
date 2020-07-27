/**
 * Builds an array of BuyMembership messages.
 * 
 * @param {Array<BuyMembership>} buyMemberships
 * @return {Array.<StdMsg>}
 */
function buildBuyMembershipMsgList(buyMemberships) {
  let buyMembershipMsgList = new Array(buyMemberships.length).fill(null).map((buyMembership) => {
    let buyMembershipMsg = new Object();
    buyMembershipMsg['type'] = "commercio/MsgBuyMembership";
    buyMembershipMsg['value'] = buyMembership;
    return buyMembershipMsg;
  });

  return buyMembershipMsgList;
};

/**
 * Builds an array of InviteUser messages.
 * 
 * @param {Array.<InviteUser>} inviteUsers 
 * @return {Array.<StdMsg>}
 */
function buildInviteUserMsgList(inviteUsers) {
  let inviteUserMsgList = new Array(inviteUsers.length).fill(null).map((inviteUser) => {
    let inviteUserMsg = new Object();
    inviteUserMsg['type'] = "commercio/MsgInviteUser";
    inviteUserMsg['value'] = inviteUser;
    return inviteUserMsg;
  });

  return inviteUserMsgList;
};

export {
  buildBuyMembershipMsgList,
  buildInviteUserMsgList
};