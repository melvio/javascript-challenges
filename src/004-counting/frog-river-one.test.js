import assert from "assert";
import {canJump} from "./frog-river-one.js";





assert(canJump(3, [1, 2, 3]) === 3);
assert(canJump(3, [3, 2, 1]) === 3);
assert(canJump(3, [1, 2, 3, 3, 4]) === 3);
assert(canJump(3, [5, 1, 2, 3, 3, 4]) === 4);
assert(canJump(3, [5, 1, 2, 3, 3, 4]) === 4);
assert(canJump(40, [2, 3, 4, 6, 9, 11, 13, 14, 15, 19, 20, 22, 23, 24, 25, 28, 29, 33, 34, 35, 36, 37, 38, 39, 1, 5, 7, 8, 10, 12, 16, 17, 18, 21, 26, 40, 27, 30, 31, 32]) === 40);

