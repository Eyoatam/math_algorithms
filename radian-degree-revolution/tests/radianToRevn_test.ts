import { assertStrictEquals } from "https://deno.land/std@0.93.0/testing/asserts.ts";
import radianToRevn from "../radianToRevn.ts";

Deno.test("radianToRevn", () => {
  assertStrictEquals(radianToRevn(0), Infinity);
  assertStrictEquals(radianToRevn(1), Math.PI * 2);
  assertStrictEquals(radianToRevn(2), Math.PI);
  assertStrictEquals(radianToRevn(3), (2 * Math.PI) / 3);
  assertStrictEquals(radianToRevn(4), Math.PI / 2);
});
