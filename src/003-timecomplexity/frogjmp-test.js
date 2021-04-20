import assert from "assert";
import frogJump from "./frogjmp.js";



function testFrogJmp() {
    assert(frogJump(10, 85, 30) === 3);
    assert(frogJump(10, 99, 10) === 9);
    assert(frogJump(10, 100, 10) === 9);
    assert(frogJump(10, 101, 10) === 10);
    assert(frogJump(1, 800_000_000, 2) === 400_000_000);
}


testFrogJmp();
console.log("success");
