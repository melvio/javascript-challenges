// split a list to maximize the absolute sum difference of the halves.
// O(n)
export function tapeEquilibrium(arr) {
    let leftSum = 0;
    let leftSums = [];
    let totalSum = 0;
    for (let i of arr) {
        totalSum += i;
        leftSum += i;
        leftSums.push(leftSum);
    }
    leftSums.pop(); // can't split at the end of the list

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
