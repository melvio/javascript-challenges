function getArraySumInformation(arr) {
    let leftSum = 0;
    let leftSums = [];
    let totalSum = 0;
    for (let i of arr) {
        totalSum += i;
        leftSum += i;
        leftSums.push(leftSum);
    }
    leftSums.pop(); // can't split at the end of the list
    return {leftSums, totalSum};
}

function calculateOptimalSplit(leftSums, totalSum) {
    let p = 1;
    let maxP = 1;
    let maxDifference = 0;
    for (let ls of leftSums) {
        let rightSum = totalSum - ls;
        let difference = Math.abs(ls - rightSum);
        if (difference > maxDifference) {
            maxDifference = difference;
            maxP = p;
        }
        p += 1;
    }
    return maxP;
}

// split a list to maximize the absolute sum difference of the halves.
// O(n)
function tapeEquilibrium(arr) {
    let {leftSums, totalSum} = getArraySumInformation(arr);
    return calculateOptimalSplit(leftSums, totalSum);
}


module.exports = tapeEquilibrium;
