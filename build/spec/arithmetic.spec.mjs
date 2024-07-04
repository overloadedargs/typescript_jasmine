// importing from foo.mts
// import { foo } from "./foo.mjs";
// importing from bar.cts
// import { bar } from "./bar.cjs";
// importing from baz.js
// import { baz } from "./baz.js";
// src/arithmetic.spec.mts
import Add from "../src/arithmetic.mjs";
describe("add", () => {
    it("should add two numbers", () => {
        expect(Add(1, 2)).toBe(3);
    });
});
