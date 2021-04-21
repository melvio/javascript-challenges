function solution(n, operations) {
    let result = createStartArray(n, operations);

    let curIndex = 0;
    let maxValue = 0;
    for (let operation of operations) {
        if (operation === n + 1) {
            result = new Array(result.length).fill(maxValue);
        } else {
            let increaseResult = increase(operation - 1, result, maxValue);
            maxValue = increaseResult.newMax;
            result = increaseResult.result;
        }

        curIndex += 1;
    }
    return result;

}

function increase(index, counters, maxValue) {
    let result = counters;
    if (result[index] === undefined) {
        result[index] = 0;
    }
    result[index] += 1;

    let newMax = Math.max(result[index], maxValue);
    return {result, newMax};
}

function createStartArray(n, operations) {
    let len = 0;
    for (let indx of operations) {
        if (indx > len) {
            len = indx;
        }
    }

    const requiredLength = n + 1 === len ? len - 1 : len;
    return Array(requiredLength).fill(0);
}


module.exports = solution;
