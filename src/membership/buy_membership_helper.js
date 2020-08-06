const memberhipTypes = {
  BLACK: "black",
  BRONZE: "bronze",
  GOLD: "gold",
  SILVER: "silver",
};

/**
 * Creates a BuyMembership object.
 * @param {String} bech32Address
 * @param {String} membershipType
 * @return {BuyMembership} 
 */
function buyMembershipFromWallet({
  bech32Address,
  membershipType
}) {
  if (!membershipType) {
    throw new Error('Membership type is not defined')
  }

  let checkMembership = false;
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
    throw new Error('This membership type is not allowed')
  }

  let buyMembership = new Object();
  buyMembership['membership_type'] = membershipType;
  buyMembership['buyer'] = bech32Address;

  return buyMembership;
};

export {
  buyMembershipFromWallet,
  memberhipTypes
};