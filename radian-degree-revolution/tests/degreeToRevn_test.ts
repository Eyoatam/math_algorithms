import { assertStrictEquals } from "https://deno.land/std@0.93.0/testing/asserts.ts";
import { degreeToRev } from "../degreeToRevn.ts";

Deno.test("revnToDegree", () => {
  assertStrictEquals(degreeToRev(0), 0);
  assertStrictEquals(degreeToRev(360), 1);
  assertStrictEquals(degreeToRev(270), 3 / 4);
  assertStrictEquals(degreeToRev(180), 0.5);
  assertStrictEquals(degreeToRev(90), 0.25);
  assertStrictEquals(degreeToRev(45), 0.125);
});
