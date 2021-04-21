import assert from "assert";
import {tapeEquilibrium} from "./tape-equilibrium.js";




function testTapeEquilibrium() {
    assert(tapeEquilibrium([1, 3, 4, 5]) === 1);
    assert(tapeEquilibrium([1, 4, 5]) === 1);
    assert(tapeEquilibrium([5, -5, 7, 6]) === 2);
    assert(tapeEquilibrium([0, 0]) === 1);
    assert(tapeEquilibrium([-10, 0]) === 1);
}

testTapeEquilibrium();
console.log("success");
