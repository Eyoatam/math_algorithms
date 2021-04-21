/**
 * returns the greatest commom divisor(GCD) of two numbers
 * Example:
 *  ```ts
 *  GCD(16, 4);
 *  // will return 4
 *  ```
 * @param firstNum - the first number
 * @param secondNum - the second number
 */

export default function GCD(firstNum: number, secondNum: number): number {
  // Make the input numbers positive by taking the absolute value of the numbers
  const a = Math.abs(firstNum);
  const b = Math.abs(secondNum);
  // check if the second number(b) is equal to zero and if its equal to zero
  // returns the first number(a) if its is not
  // Recursively calls it self until the second number(b) is equal to zero
  if (b === 0) {
    return a;
  } else {
    return GCD(b, a % b);
  }
}
