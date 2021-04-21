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
    return -1; // cannot jump
}

module.exports = canJump

