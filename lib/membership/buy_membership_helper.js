"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buyMembershipFromWallet = buyMembershipFromWallet;
exports.memberhipTypes = void 0;
var memberhipTypes = {
  BLACK: "black",
  BRONZE: "bronze",
  GOLD: "gold",
  SILVER: "silver"
};
/**
 * Creates a BuyMembership
 * 
 * @param {String} bech32Address
 * @param {String} membershipType
 * @return {BuyMembership} 
 */

exports.memberhipTypes = memberhipTypes;

function buyMembershipFromWallet(_ref) {
  var bech32Address = _ref.bech32Address,
      membershipType = _ref.membershipType;

  if (!membershipType) {
    throw new Error('Membership type is not defined');
  }

  var checkMembership = false;

  switch (membershipType) {
    case memberhipTypes.BLACK:
      checkMembership = true;
      break;

    case memberhipTypes.BRONZE:
      checkMembership = true;
      break;

    case memberhipTypes.GOLD:
      checkMembership = true;
      break;

    case memberhipTypes.SILVER:
      checkMembership = true;
      break;

    default:
      break;
  }

  if (!checkMembership) {
    throw new Error('This membership type is not allowed');
  }

  var buyMembership = new Object();
  buyMembership['membership_type'] = membershipType;
  buyMembership['buyer'] = bech32Address;
  return buyMembership;
}

;