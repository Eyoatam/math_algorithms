import { assertStrictEquals } from "https://deno.land/std@0.93.0/testing/asserts.ts";
import degreeToRevn from "../degreeToRevn.ts";

Deno.test("revnToDegree", () => {
  assertStrictEquals(degreeToRevn(0), 0);
  assertStrictEquals(degreeToRevn(360), 1);
  assertStrictEquals(degreeToRevn(270), 3 / 4);
  assertStrictEquals(degreeToRevn(180), 0.5);
  assertStrictEquals(degreeToRevn(90), 0.25);
  assertStrictEquals(degreeToRevn(45), 0.125);
});
