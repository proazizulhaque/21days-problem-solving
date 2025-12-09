/**
 * Print All Even Numbers from 1 to N

Input: 10
Output: 2 4 6 8 10
✨ Introduces conditional checks inside loops.

 */

function printEvenNum(range) {
  for (let i = 1; i <= range; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
printEvenNum(10)
