"use strict";

var _membership_helper = require("../membership_helper");

describe("membership/membership_helper", function () {
  it("Checks if function 'buildBuyMembershipMsgList' returns an array 'commercio/MsgBuyMembership'", function () {
    var buyMemberships = [{
      membership_type: "<membership type identifier>",
      buyer: "<your address>"
    }];
    var expectedValue = [{
      type: "commercio/MsgBuyMembership",
      value: {
        membership_type: "<membership type identifier>",
        buyer: "<your address>"
      }
    }];
    var response = (0, _membership_helper.buildBuyMembershipMsgList)(buyMemberships);
    expect(response).toStrictEqual(expectedValue);
  });
  it("Checks if function 'buildInviteUserMsgList' returns an array 'commercio/MsgInviteUser'", function () {
    var inviteUsers = [{
      recipient: "<address of the user to be invited>",
      sender: "<your address>"
    }];
    var expectedValue = [{
      type: "commercio/MsgInviteUser",
      value: {
        recipient: "<address of the user to be invited>",
        sender: "<your address>"
      }
    }];
    var response = (0, _membership_helper.buildInviteUserMsgList)(inviteUsers);
    expect(response).toStrictEqual(expectedValue);
  });
});