const tapeEquilibrium = require("./tape-equilibrium.js");


test("testTapeEquilibrium", () => {
    expect(tapeEquilibrium([1, 3, 4, 5])).toBe(1);
    expect(tapeEquilibrium([1, 4, 5])).toBe(1);
    expect(tapeEquilibrium([5, -5, 7, 6])).toBe(2);
    expect(tapeEquilibrium([0, 0])).toBe(1);
    expect(tapeEquilibrium([-10, 0])).toBe(1);
});

