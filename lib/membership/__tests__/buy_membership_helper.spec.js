"use strict";

var _buy_membership_helper = require("../buy_membership_helper");

describe("membership/buy_membership_helper", function () {
  it("Checks if function 'buyMembershipFromWallet' returns a BuyMembership", function () {
    var bech32Address = "did:com:1ttxcnevaxlk58u4uuec2n7cm44rk9tsgc8tn6m";
    var membershipType = _buy_membership_helper.memberhipTypes.BLACK;
    var expectedValue = {
      membership_type: _buy_membership_helper.memberhipTypes.BLACK,
      buyer: "did:com:1ttxcnevaxlk58u4uuec2n7cm44rk9tsgc8tn6m"
    };
    var response = (0, _buy_membership_helper.buyMembershipFromWallet)({
      bech32Address: bech32Address,
      membershipType: membershipType
    });
    expect(response).toStrictEqual(expectedValue);
  });
});