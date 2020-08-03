import {
  buildBuyMembershipMsgList,
  buildInviteUserMsgList
} from "../membership_helper";

describe("membership/membership_helper", () => {
  it("Checks if function 'buildBuyMembershipMsgList' returns an array 'commercio/MsgBuyMembership'", () => {
    const buyMemberships = [{
      membership_type: "<membership type identifier>",
      buyer: "<your address>"
    }];

    const expectedValue = [{
      type: "commercio/MsgBuyMembership",
      value: {
        membership_type: "<membership type identifier>",
        buyer: "<your address>"
      }
    }];

    const response = buildBuyMembershipMsgList(buyMemberships);

    expect(response).toStrictEqual(expectedValue);
  });

  it("Checks if function 'buildInviteUserMsgList' returns an array 'commercio/MsgInviteUser'", () => {
    const inviteUsers = [{
      recipient: "<address of the user to be invited>",
      sender: "<your address>"
    }];

    const expectedValue = [{
      type: "commercio/MsgInviteUser",
      value: {
        recipient: "<address of the user to be invited>",
        sender: "<your address>"
      }
    }];

    const response = buildInviteUserMsgList(inviteUsers);

    expect(response).toStrictEqual(expectedValue);
  });
});