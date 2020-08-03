"use strict";

var _close_cdp_helper = require("../close_cdp_helper");

describe("mint/close_cdp_helper", function () {
  it("Checks if function 'closeCdpFromWallet' returns a CloseCdp", function () {
    var bech32Address = "did:com:1ttxcnevaxlk58u4uuec2n7cm44rk9tsgc8tn6m";
    var timeStamp = "1";
    var expectedValue = {
      signer: "did:com:1ttxcnevaxlk58u4uuec2n7cm44rk9tsgc8tn6m",
      timestamp: "1"
    };
    var response = (0, _close_cdp_helper.closeCdpFromWallet)({
      bech32Address: bech32Address,
      timeStamp: timeStamp
    });
    expect(response).toStrictEqual(expectedValue);
  });
});