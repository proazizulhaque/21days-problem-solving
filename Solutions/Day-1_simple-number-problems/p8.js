/** Find the sum of all odd numbers up to N

Input: 10
Output: 25 (1 + 3 + 5 + 7 + 9)
✨ Combines looping with conditional accumulation. */
let oddNum;
let sum = 0;
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 1) {
    oddNum = i;
    sum = sum + oddNum;
  }
}
console.log({ sumOfOdd: sum });
