"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildBuyMembershipMsgList = buildBuyMembershipMsgList;
exports.buildInviteUserMsgList = buildInviteUserMsgList;

/**
 * Builds an array of BuyMembership messages.
 * 
 * @param {Array<BuyMembership>} buyMemberships
 * @return {Array.<StdMsg>}
 */
function buildBuyMembershipMsgList(buyMemberships) {
  var buyMembershipMsgList = new Array(buyMemberships.length).fill(null).map(function (buyMembership) {
    var buyMembershipMsg = new Object();
    buyMembershipMsg['type'] = "commercio/MsgBuyMembership";
    buyMembershipMsg['value'] = buyMembership;
    return buyMembershipMsg;
  });
  return buyMembershipMsgList;
}

;
/**
 * Builds an array of InviteUser messages.
 * 
 * @param {Array.<InviteUser>} inviteUsers 
 * @return {Array.<StdMsg>}
 */

function buildInviteUserMsgList(inviteUsers) {
  var inviteUserMsgList = new Array(inviteUsers.length).fill(null).map(function (inviteUser) {
    var inviteUserMsg = new Object();
    inviteUserMsg['type'] = "commercio/MsgInviteUser";
    inviteUserMsg['value'] = inviteUser;
    return inviteUserMsg;
  });
  return inviteUserMsgList;
}

;