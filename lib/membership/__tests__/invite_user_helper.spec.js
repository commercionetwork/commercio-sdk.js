"use strict";

var _invite_user_helper = require("../invite_user_helper");

describe("membership/invite_user_helper", function () {
  it("Checks if function 'inviteUserFromWallet' returns an InviteUser", function () {
    var recipient = "did:com:1ttxcnevaxlk58u4uuec2n7cm44rk9tsgc8tn6m";
    var sender = "did:com:1yq5z4236gmcuus2t940spppwzz8uggpj5ty7ha";
    var expectedValue = {
      recipient: "did:com:1ttxcnevaxlk58u4uuec2n7cm44rk9tsgc8tn6m",
      sender: "did:com:1yq5z4236gmcuus2t940spppwzz8uggpj5ty7ha"
    };
    var response = (0, _invite_user_helper.inviteUserFromWallet)({
      recipient: recipient,
      sender: sender
    });
    expect(response).toStrictEqual(expectedValue);
  });
});