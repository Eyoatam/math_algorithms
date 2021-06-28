import { assertStrictEquals } from "https://deno.land/std@0.99.0/testing/asserts.ts";
import { degreeToRadian } from "../degreeToRadian.ts";

Deno.test("degreeToRadian", () => {
  assertStrictEquals(degreeToRadian(0), 0);
  assertStrictEquals(degreeToRadian(540), 3 * Math.PI);
  assertStrictEquals(degreeToRadian(450), 5 * (Math.PI / 2));
  assertStrictEquals(degreeToRadian(360), 2 * Math.PI);
  assertStrictEquals(degreeToRadian(270), 3 * (Math.PI / 2));
  assertStrictEquals(degreeToRadian(180), Math.PI);
  assertStrictEquals(degreeToRadian(90), Math.PI / 2);
  assertStrictEquals(degreeToRadian(45), Math.PI / 4);
});
