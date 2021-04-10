

/* find longest sequence of 0 between to 1s in the binary version representation
 * e.g. n=5 -> n=101 , has sequence of '0' which is of length 1
 *
 * O(log n)
 */
export default function sequence101(n) {
    let maxSequenceLength = 0;
    let currentSequenceLength = 0;
    let foundFirst1 = false;

    while (n > 0) {
        if (n % 2 === 1 && !foundFirst1) {
            foundFirst1 = true;
        } else if (n % 2 === 0 && foundFirst1) {
            currentSequenceLength += 1;
        } else if (n % 2 === 1 && foundFirst1) {
            maxSequenceLength = Math.max(currentSequenceLength, maxSequenceLength);
            currentSequenceLength = 0;
        }
        n >>= 1;
    }
    return maxSequenceLength;
}


