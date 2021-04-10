import assert from "assert";
import oddOccurrencesInArray from "./oddoccur.js";

function testOddOccurrencesInArray() {
    assert(oddOccurrencesInArray([1, 3, 1]) === 3);
    assert(oddOccurrencesInArray([5, 5, 1]) === 1);
    assert(oddOccurrencesInArray([9, 9, 3, 3, 9, 7, 9]) === 7);
    assert(oddOccurrencesInArray([1, 9, 9, 3, 8, 9, 8, 9, 10, 1, 10]) === 3);
    assert(oddOccurrencesInArray([-1, 1, 1]) === -1);
    console.log("success");
}

testOddOccurrencesInArray();

