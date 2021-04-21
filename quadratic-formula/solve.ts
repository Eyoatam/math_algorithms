/**
 * This function uses the `quadratic formula` to calculate the solution for a quadratic equation
 * with the given a, b and c values
 * @param a - value of a
 * @param b - value of b
 * @param c - value of c
 * @see https://en.wikipedia.org/wiki/Quadratic_formula
 */

export function solveEqn(
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
