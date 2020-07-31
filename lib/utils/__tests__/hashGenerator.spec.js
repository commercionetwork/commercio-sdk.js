"use strict";

var _index = require("../index");

describe("utils/hashGenerator", function () {
  it("Checks if function 'getHash256' return right value", function () {
    var message = "message";
    var expectedValue = "ab530a13e45914982b79f9b7e3fba994cfd1f3fb22f71cea1afbf02b460c6d1d";

    var response = _index.hashGenerator.getHash256(message);

    expect(response).toBe(expectedValue);
  });
});