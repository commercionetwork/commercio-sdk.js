"use strict";

var _open_cdp_helper = require("../open_cdp_helper");

describe("mint/open_cdp_helper", function () {
  it("Checks if function 'openCdpFromWallet' returns a OpenCdp", function () {
    var bech32Address = "did:com:1ttxcnevaxlk58u4uuec2n7cm44rk9tsgc8tn6m";
    var amount = [{
      amount: "10",
      denom: "ucommercio"
    }];
    var expectedValue = {
      deposited_amount: [{
        amount: "10",
        denom: "ucommercio"
      }],
      depositor: "did:com:1ttxcnevaxlk58u4uuec2n7cm44rk9tsgc8tn6m"
    };
    var response = (0, _open_cdp_helper.openCdpFromWallet)({
      bech32Address: bech32Address,
      amount: amount
    });
    expect(response).toStrictEqual(expectedValue);
  });
});