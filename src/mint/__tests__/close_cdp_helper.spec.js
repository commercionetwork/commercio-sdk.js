import {
  closeCdpFromWallet
} from "../close_cdp_helper";

describe("mint/close_cdp_helper", () => {
  it("Checks if function 'closeCdpFromWallet' returns a CloseCdp", () => {
    const bech32Address = "did:com:1ttxcnevaxlk58u4uuec2n7cm44rk9tsgc8tn6m";
    const timeStamp = "1";

    const expectedValue = {
      signer: "did:com:1ttxcnevaxlk58u4uuec2n7cm44rk9tsgc8tn6m",
      timestamp: "1"
    };

    const response = closeCdpFromWallet({
      bech32Address: bech32Address,
      timeStamp: timeStamp
    });

    expect(response).toStrictEqual(expectedValue);
  });
});