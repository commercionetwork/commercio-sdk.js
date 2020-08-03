import {
  openCdpFromWallet
} from "../open_cdp_helper";

describe("mint/open_cdp_helper", () => {
  it("Checks if function 'openCdpFromWallet' returns a OpenCdp", () => {
    const bech32Address = "did:com:1ttxcnevaxlk58u4uuec2n7cm44rk9tsgc8tn6m";
    const amount = [{
      amount: "10",
      denom: "ucommercio"
    }];

    const expectedValue = {
      deposited_amount: [{
        amount: "10",
        denom: "ucommercio"
      }],
      depositor: "did:com:1ttxcnevaxlk58u4uuec2n7cm44rk9tsgc8tn6m"
    };

    const response = openCdpFromWallet({
      bech32Address: bech32Address,
      amount: amount
    });

    expect(response).toStrictEqual(expectedValue);
  })
});