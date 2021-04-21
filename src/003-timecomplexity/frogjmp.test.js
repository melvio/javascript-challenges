const frogJump = require("./frogjmp.js");


test("testFrogJmp", () => {
    expect(frogJump(10, 85, 30)).toBe(3);
    expect(frogJump(10, 99, 10)).toBe(9);
    expect(frogJump(10, 100, 10)).toBe(9);
    expect(frogJump(10, 101, 10)).toBe(10);
    expect(frogJump(1, 800_000_000, 2)).toBe(400_000_000);
});


