import {
  buyMembershipFromWallet,
  memberhipTypes
} from "../buy_membership_helper";

describe("membership/buy_membership_helper", () => {
  it("Checks if function 'buyMembershipFromWallet' returns a BuyMembership", () => {
    const bech32Address = "did:com:1ttxcnevaxlk58u4uuec2n7cm44rk9tsgc8tn6m";
    const membershipType = memberhipTypes.BLACK;

    const expectedValue = {
      membership_type: memberhipTypes.BLACK,
      buyer: "did:com:1ttxcnevaxlk58u4uuec2n7cm44rk9tsgc8tn6m"
    };

    const response = buyMembershipFromWallet({
      bech32Address: bech32Address,
      membershipType: membershipType
    });

    expect(response).toStrictEqual(expectedValue);
  });
});