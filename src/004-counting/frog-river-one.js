import assert from "assert";


// O(n)
function canJump(destination, leaves) {
    // https://en.wikipedia.org/wiki/1_%2B_2_%2B_3_%2B_4_%2B_%E2%8B%AF
    // Using the shift by 1 trick to prevent floating point numbers.
    // We can use shift by 1 because we multiple a positive odd and even number.
    let destinationSum = (destination * (destination + 1)) >> 1;

    let index = 1;
    let alreadySeen = {}; // use a map for O(1) loop up
    for (let leave of leaves) {
        if (leave <= destination) {
            if (!(leave in alreadySeen)) {
                destinationSum -= leave;
                alreadySeen[leave] = null;
            }
            if (destinationSum === 0) {
                return index;
            }
        }
        index += 1;
    }
    return -1;
}


assert(canJump(3, [1, 2, 3]) === 3);
assert(canJump(3, [3, 2, 1]) === 3);
assert(canJump(3, [1, 2, 3, 3, 4]) === 3);
assert(canJump(3, [5, 1, 2, 3, 3, 4]) === 4);
assert(canJump(3, [5, 1, 2, 3, 3, 4]) === 4);
assert(canJump(40, [2, 3, 4, 6, 9, 11, 13, 14, 15, 19, 20, 22, 23, 24, 25, 28, 29, 33, 34, 35, 36, 37, 38, 39, 1, 5, 7, 8, 10, 12, 16, 17, 18, 21, 26, 40, 27, 30, 31, 32]) === 40);

