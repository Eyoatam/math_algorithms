import { assertStrictEquals } from "https://deno.land/std@0.99.0/testing/asserts.ts";
import { revnToRadian } from "../revnToRadian.ts";

Deno.test("revnToRadian", () => {
  assertStrictEquals(revnToRadian(0), 0);
  assertStrictEquals(revnToRadian(1), 2 * Math.PI);
  assertStrictEquals(revnToRadian(2), 4 * Math.PI);
  assertStrictEquals(revnToRadian(3), 6 * Math.PI);
});
