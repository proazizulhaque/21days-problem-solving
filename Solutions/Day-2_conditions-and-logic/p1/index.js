#!/usr/bin/env node
// লুপের ভিতরে সৃজনশীলভাবে লজিক পরিবর্তন/প্রয়োগ করা।
"use strict";
const n1 = Number(process.argv[2]);
const n2 = Number(process.argv[3]);
const n3 = Number(process.argv[4]);
/**
 * Placeholder solution for p1
 */
console.log({ n1, n2, n3 });

// Find the Maximum of Three Numbers
// Input: 10 20 5
// Output: 20

if (n1 > n2 && n1 > n3) {
  console.log(n1, "is the max num");
} else if (n2 > n3) {
  console.log(n2, "is the max num");
} else {
  console.log(n3, "is the max num");
}
 