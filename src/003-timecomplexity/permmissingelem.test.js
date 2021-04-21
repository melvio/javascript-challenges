import assert from "assert";
import {findMissingElement, sumArray} from "./permmissingelem.js";

function testFindMissingElement() {
    assert(findMissingElement([1, 3]) === 2);
    assert(findMissingElement([1, 2, 3, 5, 4, 7]) === 6);
    assert(findMissingElement([1, 2, 3, 4, 7, 8, 6, 10, 9, 11, 13, 12]) === 5);
}

function testSumArray() {
    assert(sumArray([]) === 0);
    assert(sumArray([1]) === 1);
    assert(sumArray([1, -1]) === 0);
    assert(sumArray([1, 2, 3]) === 6);
}

testSumArray();
testFindMissingElement();
console.log("success");
