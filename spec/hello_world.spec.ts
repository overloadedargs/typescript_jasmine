// src/add.spec.ts
import { add } from "../src/hello_world";

describe("add", () => {
  it("should add two numbers", () => {
    expect(add(1, 2)).toBe(3);
  });
});