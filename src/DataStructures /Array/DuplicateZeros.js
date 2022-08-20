//https://leetcode.com/explore/learn/card/fun-with-arrays/525/inserting-items-into-an-array/3245/
// https://leetcode.com/problems/duplicate-zeros/
// 1089. Duplicate Zeros

import {appRunner} from '../../app.js';

let tests = [
    {
        "input": [1, 0, 2, 3, 0, 4, 5, 0],
        "expected": [1, 0, 0, 2, 3, 0, 0, 4]
    },
    {
        "input": [1, 2, 3],
        "expected": [1, 2, 3]
    },
    {
        "input": [0,0,0,0,0,0,0],
        "expected": [0,0,0,0,0,0,0]
    },
];

/**
 * T: O(N^2)
 * S: O(1)
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
let duplicateZeros1 = function (arr) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            for (let j = arr.length - 1; j >= i + 1; j--) {
                arr[j] = arr[j - 1];
            }
            i++;
        }
    }
};

/**
 * T: O(N)
 * S: O(N)
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
let duplicateZeros2 = function (arr) {

    let d = 0;
    let src = [...arr];

    for (let i = 0; d < src.length; i++) {
        if (src[i] === 0) {
            arr[d] = src[i];
            d += 1;
            if (d < src.length) {
                arr[d] = src[i];
            }
        } else {
            arr[d] = src[i];
        }
        d++;
    }
};

appRunner(tests, duplicateZeros1);
appRunner(tests, duplicateZeros2);