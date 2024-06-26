// src/add.spec.ts
import Add from "../src/hello_world.mjs";
describe("add", () => {
    it("should add two numbers", () => {
        expect(Add(1, 2)).toBe(3);
    });
});
