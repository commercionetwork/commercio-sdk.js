"use strict";

var _mint_helper = require("../mint_helper");

describe("mint/mint_helper", function () {
  it("Checks if function 'buildCloseCdpMsgList' returns an array of 'commercio/MsgCloseCdp'", function () {
    var closeCdps = [{
      signer: "<user address>",
      timestamp: "<block height at which the CDP is being inserted into the chain>"
    }];
    var expectedValue = [{
      type: "commercio/MsgCloseCdp",
      value: {
        signer: "<user address>",
        timestamp: "<block height at which the CDP is being inserted into the chain>"
      }
    }];
    var response = (0, _mint_helper.buildCloseCdpMsgList)(closeCdps);
    expect(response).toStrictEqual(expectedValue);
  });
  it("Checks if function 'buildOpenCdpMsgList' returns an array with 1 'commercio/MsgOpenCdp'", function () {
    var openCdp = {
      deposited_amount: [{
        amount: "<amount to be deposited>",
        denom: "<token denom to be deposited>"
      }],
      depositor: "<user address>"
    };
    var expectedValue = [{
      type: "commercio/MsgOpenCdp",
      value: {
        deposited_amount: [{
          amount: "<amount to be deposited>",
          denom: "<token denom to be deposited>"
        }],
        depositor: "<user address>"
      }
    }];
    var response = (0, _mint_helper.buildOpenCdpMsgList)(openCdp);
    expect(response).toStrictEqual(expectedValue);
    expect(response.length).toBe(1);
  });
});