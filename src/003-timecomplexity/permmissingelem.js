// complexity: O(n) because of the array summing
export function findMissingElement(arr) {
    let n = arr.length + 1;

    // <https://en.wikipedia.org/wiki/1_%2B_2_%2B_3_%2B_4_%2B_%E2%8B%AF>
    // But instead of dividing by 2, use shift by 1 because we don't want floating point errors.
    // We can safely shift because we multiply a positive odd and even natural number.
    let expectedTotal = n * (n + 1) >> 1;

    return expectedTotal - sumArray(arr);
}


export function sumArray(arr) {
    if (arr.length === 0) {
        return 0;
    }
    if (arr.length === 1) {
        return arr[0];
    }

    return arr.reduce((x, y) => {
        return x + y;
    });
}

