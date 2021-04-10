import assert from "assert";

function cyclicRotation(a, k) {
    let aLength = a.length;
    let kNormalized = k % aLength;
    if (k === 0 || kNormalized === 0 || aLength === 0) {
        return a;
    }

    let startArray = a.slice(kNormalized);
    let endArray = a.slice(0, kNormalized);

    return startArray.concat(endArray);
}

function testCyclicRotation() {
    assertSameArray(cyclicRotation([], 0), []);
    assertSameArray(cyclicRotation([1], 0), [1]);
    assertSameArray(cyclicRotation([3, 1, 2], 0), [3, 1, 2]);
    assertSameArray(cyclicRotation([3, 1, 2], 3), [3, 1, 2]);
    assertSameArray(cyclicRotation([3, 1, 2], 1), [1, 2, 3]);
    assertSameArray(cyclicRotation([3, 1, 2], 4), [1, 2, 3]);
    assertSameArray(cyclicRotation([6, 10, 12, 21, 10], 3), [21, 10, 6, 10, 12]);
    console.log("success");
}

function assertSameArray(ar1, ar2) {
    assert(ar1.length === ar2.length, "array lengths are: " + ar1.length + " and " + ar2.length);
    assert(ar1.every((val, index) => val === ar2[index]), "not same elements");
}

assertSameArray([], []);

testCyclicRotation();

