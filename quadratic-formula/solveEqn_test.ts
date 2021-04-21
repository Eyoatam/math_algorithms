import { assertStrictEquals } from "https://deno.land/std@0.93.0/testing/asserts.ts";
import solveEqn from "./solve.ts";

Deno.test("Quadratic Formula", () => {
  const { firstSolution, secondSolution } = solveEqn(2, 3, 4);
  assertStrictEquals(firstSolution, -10.75);
  assertStrictEquals(secondSolution, 4.75);
});
