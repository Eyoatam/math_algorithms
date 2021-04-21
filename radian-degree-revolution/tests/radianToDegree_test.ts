import { assertStrictEquals } from "https://deno.land/std@0.93.0/testing/asserts.ts";
import { radianToDegree } from "../radianToDegree.ts";

Deno.test("radianToDegree", () => {
  assertStrictEquals(radianToDegree(0), 0);
  assertStrictEquals(radianToDegree(Math.PI), 180);
  assertStrictEquals(radianToDegree(1), 180 / Math.PI);
  assertStrictEquals(radianToDegree(2), 360 / Math.PI);
  assertStrictEquals(radianToDegree(3), 540 / Math.PI);
});
