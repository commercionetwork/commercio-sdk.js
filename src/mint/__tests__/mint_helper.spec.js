import {
  buildCloseCdpMsgList,
  buildOpenCdpMsgList
} from "../mint_helper";

describe("mint/mint_helper", () => {
  it("Checks if function 'buildCloseCdpMsgList' returns an array of 'commercio/MsgCloseCdp'", () => {
    const closeCdps = [{
      signer: "<user address>",
      timestamp: "<block height at which the CDP is being inserted into the chain>"
    }];

    const expectedValue = [{
      type: "commercio/MsgCloseCdp",
      value: {
        signer: "<user address>",
        timestamp: "<block height at which the CDP is being inserted into the chain>"
      }
    }];

    const response = buildCloseCdpMsgList(closeCdps);

    expect(response).toStrictEqual(expectedValue);
  });

  it("Checks if function 'buildOpenCdpMsgList' returns an array with 1 'commercio/MsgOpenCdp'", () => {
    const openCdp = {
      deposited_amount: [{
        amount: "<amount to be deposited>",
        denom: "<token denom to be deposited>"
      }],
      depositor: "<user address>"
    };

    const expectedValue = [{
      type: "commercio/MsgOpenCdp",
      value: {
        deposited_amount: [{
          amount: "<amount to be deposited>",
          denom: "<token denom to be deposited>"
        }],
        depositor: "<user address>"
      }
    }];

    const response = buildOpenCdpMsgList(openCdp);

    expect(response).toStrictEqual(expectedValue);
    expect(response.length).toBe(1);
  });
});