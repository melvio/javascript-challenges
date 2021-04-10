// find longest sequence of 0 between to 1s in the binary version representation
// e.g. n=5 -> n=101 , has sequence of '0' which is of length 1
import assert from "assert";

function sequence101(n) {
    let maxSequenceLength = 0;
    let currentSequenceLength = 0
    let foundFirst1 = false;

    while (n > 0) {
        if (n % 2 === 1 && !foundFirst1) {
            foundFirst1 = true;
        } else if (n % 2 === 0 && !foundFirst1) {
            // do nothing
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


function testSequence101() {
    assert(sequence101(0) === 0);  // 0
    assert(sequence101(1) === 0);  // 1
    assert(sequence101(2) === 0);  // 10
    assert(sequence101(3) === 0);  // 11
    assert(sequence101(4) === 0);  // 100
    assert(sequence101(5) === 1);  // 101
    assert(sequence101(9) === 2);  // 1001
    assert(sequence101(10) === 1); // 1010
    assert(sequence101(11) === 1); // 1011
    assert(sequence101(12) === 0); // 1110
    assert(sequence101(41) === 2); // 101001
    assert(sequence101(277) === 3);  // 100010101
    assert(sequence101(1000) === 1); // 1111101000
    assert(sequence101(1160) === 3); // 10010001000
    assert(sequence101(1161) === 3); // 10010001001
    assert(sequence101(-1) === 0);
    console.log("success")
}

testSequence101()
