/** Find the sum of all odd numbers up to N

Input: 10
Output: 25 (1 + 3 + 5 + 7 + 9)
✨ Combines looping with conditional accumulation. */

// brute force
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 == 1) {
//     sum += i;
//   }
// }
// console.log({ sumOfOdd: sum });

// optimized/math formula

let n = 10000;
console.time("result2");
n = BigInt(n);
let result2 = 0n;
for (let i = 1n; i <= n; i++) {
  if (i % 2n == 0) {
    result2 += i;
  }
}
console.log(result2); //250000000500000000n --> precision number
console.timeEnd("result2"); // 1:03.396 (m:ss.mmm)

// using formula ---------
n = Number(5);
console.time("result3");

let result3 = n * (n + 1);
console.log(result3); // 250000000500000000 -> Precision Number
console.timeEnd("result3"); // 0.079ms

// formula for : "sum of first even nums"
const sumOfFirstEvenNums = (n) => n * (n + 1);
console.log(sumOfFirstEvenNums(5), "sum of first even nums");


// formula for : "sum of first odd nums"
const sumOfFirstOddNums = (n) => n ** 2; // formula 01
console.log(sumOfFirstOddNums`5`);
const sumOfFirstOddNums2 = (n) => n * (n + 1) - n; // formula 02
console.log(sumOfFirstOddNums2(5), '"sum of first even nums"');
