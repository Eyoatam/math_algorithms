import { assertStrictEquals } from "https://deno.land/std@0.93.0/testing/asserts.ts";
import GCD from "./euclidean_algorithm.ts";

Deno.test("GCD", () => {
  assertStrictEquals(GCD(16, 4), 4);
  assertStrictEquals(GCD(12, 5), 1);
  assertStrictEquals(GCD(4, 2), 2);
  assertStrictEquals(GCD(5, 2), 1);
  assertStrictEquals(GCD(16, 32), 16);
  assertStrictEquals(GCD(-12, 5), 1);
  assertStrictEquals(GCD(512, -1024), 512);
});
