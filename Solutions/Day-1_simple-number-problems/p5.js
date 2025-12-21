/** Sum of All Even Numbers up to N

Input: 10
Output: 30 (2+4+6+8+10)
✨ Combines loops + condition + accumulation. */

// bigInt data type
// console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
// console.log(9007199254740991 + 1); // 9007199254740992
// console.log(9007199254740991 + 2); // 9007199254740992 ❌
// console.log(10n == 10); // true - same value
// console.log(10n === 10); // false - same value but data type different

function sumOfEvenNum(n) {
  if (n > Number.MAX_SAFE_INTEGER)
    throw Error("Provided Number is greater than javascript max safe number");
  else if (n > Number.MAX_SAFE_INTEGER / 2)
    throw Error(
      "Provided Number is not valid for this operation because the  output is greater than javascript max safe number",
    );

  console.time("result1");
  // brute force ->  ---------
  let result = 0; 
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      result += i;
    }
  }
  console.log(result); // 250000000134217800 --> not precision number
  console.timeEnd("result1"); //  2.578s

  // using BigInt -----------
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
  n = Number(n);
   console.time("result3");
   const halfOfN = Math.floor(n / 2);
   let result3 = halfOfN * (halfOfN + 1);
   console.log(result3); // 250000000500000000 -> Precision Number
   console.timeEnd("result3"); // 0.079ms
}
sumOfEvenNum(1000000000); // 100 kuti






