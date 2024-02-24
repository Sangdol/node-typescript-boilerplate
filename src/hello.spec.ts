import "mocha";
import { expect } from "chai";
import { world } from "./hello";

describe("world", () => {
  it("should return 'world'", () => {
    expect(world()).to.be("world");
  });
});
