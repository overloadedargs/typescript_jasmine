"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/add.spec.ts
const hello_world_1 = require("../src/hello_world");
describe("add", () => {
    it("should add two numbers", () => {
        expect((0, hello_world_1.add)(1, 2)).toBe(3);
    });
});
