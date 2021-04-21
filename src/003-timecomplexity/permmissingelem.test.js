const {findMissingElement, sumArray} = require("./permmissingelem.js");

test("testFindMissingElement", () => {
    expect(findMissingElement([1, 3])).toBe(2);
    expect(findMissingElement([1, 2, 3, 5, 4, 7])).toBe(6);
    expect(findMissingElement([1, 2, 3, 4, 7, 8, 6, 10, 9, 11, 13, 12])).toBe(5);
});


test("testSumArray", () => {
    expect(sumArray([])).toBe(0);
    expect(sumArray([1])).toBe(1);
    expect(sumArray([1, -1])).toBe(0);
    expect(sumArray([1, 2, 3])).toBe(6);
});


