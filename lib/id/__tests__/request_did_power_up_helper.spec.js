"use strict";

var _request_did_power_up_helper = require("../request_did_power_up_helper");

describe("id/request_did_power_up_helper", function () {
  it("Checks if function 'didPowerUpfromWallet' returns a RequestDidPowerUp", function () {
    var senderDid = "did:com:14zk9u8894eg7fhgw0dsesnqzmlrx85ga9rvnjc";
    var pairwiseDid = "did:com:1ttxcnevaxlk58u4uuec2n7cm44rk9tsgc8tn6m";
    var amount = [{
      amount: "10",
      denom: "ucommercio"
    }];
    var privateKey = "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDFjmVaDDFB5cxg\nuCRgC8NecsYXe6RZMaApYR1j4ML/72Mj+df8cXmGLcexnQXH8DLAl8m6dJoGTs2P\nQLGmsVDqqHT6Fo/GQIE8vpsQnJBMVTkxs4S0uM2S4b1vYQhcPY/FVm/WdjFWiHS4\np7PiXcIdOyvdPyUKlSY4f/Y6lEoJvxOoXE11VxspVN60Szsu1ZN0+lsr5m0PKUO1\nbI+KqzeYTHgo3qxs+Iy8oI+XpFL/wHAU0UsdWDNdnmPQkSRRSCd2u4Hfz7P8+xHl\nvuhTE2arJOkUsHJK9rvUq9j++emVYfMJv9wwgJO9v5UW13/jv+qc0d2n1Wnznrs/\n3nCoN0RzAgMBAAECggEBALRDMofwCCIxJUQ7wjVBhotv/wD+eQBKH/KiAsdYF5ah\nQL1bBJH8mP6uV0DiHpxJuIWz+wZ/zutijH7icTfBJCx6egKZA6fKxCJBagzGT4TX\nXtDTFYwx9KLKCKjQyWghZEaUkIgIYQyshpTXsXQkSTOTAntnWs1FOxLi8DKTjNtG\nPFvlZT6Id+79+eBKfTUwUOCFu5vLwgr9rYFSMhD5B376D/FYI35Ev8duxP9ERWhh\nicU0G60YaWc/OzOHD0LB6LwjJfdwDbYowPFSO/ewtmWSxPF3jv51nQbxzNAFy9bs\nbhHNMeCXJQ4Nzssc3tUv0nt+L1YFGk8E8CcbCg3zvIECgYEA6av3PddOL+CIQjoi\n3nh9VDl6pTCt3qhgFtJY5Zz7E+kwA3L4kNWMaU/TzXuHGY3zraVeYen2SQyNgLpB\ni11S38eIKajfOP/kzLge28JcGnpOQR9//2+H29TXz0q7KUW7i5zCiRO5ckAC+ZIm\niLOXRB9gtf4IyIBGydJvYkXO/DkCgYEA2G76t7iwbhyyi5D7Z+mfsg+H8mMqLnrJ\nnlGpylAi5pYjWCIwZ3Tdm9I/Q0y9e454MXiaHtyDanAgL2m6Z0lMQPIsCnYz9c7K\ne//kJQtEit77ZJMnVjwYE7GLJKYoghAwMc0+ykTX0cZlzbihCDwMZchFGb2k1Wus\n4WHg9Vhh3gsCgYBoZOKFZ05QB3D4nX58g7oCSdeoO1JCWljreTgsBPELGS/RKqkw\nE6eyWO6YK6rU2N1X47yB5AOa6RfCvfOQbrYascr8SazIi1JNv6hRp8h8L84MPCV0\nGgDJTpLH0mxBaRz7p6IlmYFNMJnjo87BXfKjhZ0wUXjdEqoNeo02i1eIyQKBgQCs\nu2W9Wtj0CFM2r+71b67UHTEScbIohjaC9AnePTadcRWkMSUQbGSxB4sV2xkekwW5\n9daK6tK3D+Wf8XGjHQyOiLg9YTj25KMVc5RRPDzn2C4qhobOfAd7MCcsiK+rnd/Y\n30VNiMP117FIDiH2wHXkhYEgmgoDinvfJI61QGRbIQKBgQDFbW+k0vWP1KTF89PV\ndPHjViauKs/yXHy+eieI3zNKjZ5qJ/A0Y1uIPJaBNeyIyX5aF+2XFsBIWfvenMqM\nGFxIUQThHQNq2f69bzQoaDHn7e4GDeiUkded3Slt9wPXn+wffios21CKk+GKMlTH\n2mUyCJOPPuIVxQxAJf3G6tR56g==\n-----END PRIVATE KEY-----\n";
    var governmentRsaPubKey = "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqlaQEW4FrAH6P9pzEmo9\nr0ytKQMmFrQ/HAYK+YTUc3olNVo0s7nGTkGsp4gnTkutvITFlSBPi387CKBTotvg\nLNSBFXRiiKfF1ZYfekP4kZ7hAIqlysWdwjmrdHO9gpSUdYCaYQr/wymeEv92ReRd\nCZYtzrfzkKZrZT5TrUoQG0X07b44YQG0PE+3cfoTOo0IWiJ2dUBkOyLwD1XNoQ4q\n4cu4rzh3AK9IQr8Xte732A6x9uayvPaLtxFzxzxxMPpT5HnbaWzDGEukxm4UQol3\nw7rogs5Y7e/Xxs8uGJQxoOqSaLLyB7BX7AnUY05A3yZYG/bfrWn77q7vSvi+Nf9t\nbQIDAQAB\n-----END PUBLIC KEY-----\n";
    var expectedValue = {
      claimant: "did:com:14zk9u8894eg7fhgw0dsesnqzmlrx85ga9rvnjc",
      amount: [{
        amount: "10",
        denom: "ucommercio"
      }],
      proof: "<proof>",
      id: "<uuid>",
      proof_key: "<proof_key>"
    };
    var response = (0, _request_did_power_up_helper.didPowerUpfromWallet)({
      senderDid: senderDid,
      pairwiseDid: pairwiseDid,
      amount: amount,
      privateKey: privateKey,
      governmentRsaPubKey: governmentRsaPubKey
    });
    expect(response.claimant).toBe(expectedValue.claimant);
    expect(response.amount).toStrictEqual(expectedValue.amount);
    expect(response.id).toHaveLength(36);
  });
});