const solution = require("./max-counters.js");

test("max-counters test", () => {
    expect(solution(10, [1, 2, 3])).toStrictEqual([1, 1, 1]);
    expect(solution(10, [1, 1, 1])).toStrictEqual([3]);
    expect(solution(5, [3, 4, 4, 6, 1, 4, 4])).toStrictEqual([3, 2, 2, 4, 2]);
    expect(solution(5, [3, 4, 4, 6, 1, 4, 4, 6])).toStrictEqual([4, 4, 4, 4, 4]);
    expect(solution(5, [3, 4, 4, 6, 1, 4, 4, 6, 1])).toStrictEqual([5, 4, 4, 4, 4]);
    expect(solution(5, [3, 4, 4, 6, 1, 4, 4, 6, 7])).toStrictEqual([4, 4, 4, 4, 4, 4, 5]);
});

