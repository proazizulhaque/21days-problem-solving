#!/usr/bin/env node
// লুপের ভিতরে সৃজনশীলভাবে লজিক পরিবর্তন/প্রয়োগ করা।
"use strict";
const input = Number(process.argv[2])

/**
 * Placeholder solution for p2
 */

// Check if a Number is Positive, Negative, or Zero
// Input: -9
// Output: Negative

console.log(input);
if (input > 0) {
  console.log("Positive Number");
} else if (input < 0) {
    console.log("Negative Number");
} else console.log("Zero");

// my brute force solution 🥴
// if (input[0] === "-") console.log("Negative number");
// else if (input[0] === "0") console.log("Zero");
// else {
//   console.log("positive number");
// }