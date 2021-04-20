import assert from "assert";
import sequence101 from "./binarygap.js";

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
    assert(sequence101(2097153) === 20); // 1000000000000000000001
    assert(sequence101(Number.MAX_SAFE_INTEGER) === 0); // 11111111111111111111111111111111111111111111111111111
    assert(sequence101(-1) === 0);
}

testSequence101();
console.log("success");
