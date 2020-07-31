import {
  hashGenerator
} from "../index";

describe("utils/hashGenerator", () => {
  it("Checks if function 'getHash256' return right value", ()=>{
    const message = "message";

    const expectedValue = "ab530a13e45914982b79f9b7e3fba994cfd1f3fb22f71cea1afbf02b460c6d1d";

    const response = hashGenerator.getHash256(message);
    
    expect(response).toBe(expectedValue);
  });
});