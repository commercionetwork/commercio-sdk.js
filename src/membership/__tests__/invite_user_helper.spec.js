import {
  inviteUserFromWallet
} from "../invite_user_helper";

describe("membership/invite_user_helper", () => {
  it("Checks if function 'inviteUserFromWallet' returns an InviteUser", () => {
    const recipient = "did:com:1ttxcnevaxlk58u4uuec2n7cm44rk9tsgc8tn6m";
    const sender = "did:com:1yq5z4236gmcuus2t940spppwzz8uggpj5ty7ha";

    const expectedValue = {
      recipient: "did:com:1ttxcnevaxlk58u4uuec2n7cm44rk9tsgc8tn6m",
      sender: "did:com:1yq5z4236gmcuus2t940spppwzz8uggpj5ty7ha"
    };

    const response = inviteUserFromWallet({
      recipient: recipient,
      sender: sender
    });

    expect(response).toStrictEqual(expectedValue);
  });
});