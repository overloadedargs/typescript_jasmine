// src/arithmetic.spec.mts
import VirtualPoint from "../src/virtual_point.mjs";

describe("log", () => {

  beforeEach(function(){
    spyOn(console, 'log');
  })

  it("a point", () => {
    const virtual_point = new VirtualPoint(1,2);
    virtual_point.logPoint();
    expect(console.log).toHaveBeenCalledWith('1, 2');
  });
});
