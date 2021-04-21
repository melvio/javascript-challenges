// import assert from "assert";
const canJump = require("./frog-river-one.js");


test("canJump", () => {
    expect(canJump(3, [1, 2, 3])).toBe(3);
    expect(canJump(3, [3, 2, 1])).toBe(3);
    expect(canJump(3, [1, 2, 3, 3, 4])).toBe(3);
    expect(canJump(3, [5, 1, 2, 3, 3, 4])).toBe(4);
    expect(canJump(3, [5, 1, 2, 3, 3, 4])).toBe(4);
    expect(canJump(40, [2, 3, 4, 6, 9, 11, 13, 14, 15, 19, 20, 22, 23, 24, 25, 28, 29, 33, 34, 35, 36, 37, 38, 39, 1, 5, 7, 8, 10, 12, 16, 17, 18, 21, 26, 40, 27, 30, 31, 32]))
        .toBe(40);
});
