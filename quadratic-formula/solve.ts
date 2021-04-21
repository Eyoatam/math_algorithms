/**
 * This function uses the `quadratic formula` to calculate the solution for a quadratic equation
 * with the given a, b and c values
 * @param a
 * @param b
 * @param c
 * @see https://en.wikipedia.org/wiki/Quadratic_formula
 */

export default function solveEqn(
  a: number,
  b: number,
  c: number,
): {
  firstSolution: number;
  secondSolution: number;
} {
  const firstSolution = -b + ((b ^ 2) - 4 * (a * c)) / (2 * a);
  const secondSolution = -b - ((b ^ 2) - 4 * (a * c)) / (2 * a);
  return { firstSolution, secondSolution };
}

console.log(solveEqn(2, 3, 4));
