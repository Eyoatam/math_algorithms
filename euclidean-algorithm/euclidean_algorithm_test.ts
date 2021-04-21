import { assertStrictEquals } from "https://deno.land/std@0.93.0/testing/asserts.ts";
import { euclideanAlgorithm } from "./euclidean_algorithm.ts";

Deno.test("GCD", () => {
  assertStrictEquals(euclideanAlgorithm(16, 4), 4);
  assertStrictEquals(euclideanAlgorithm(12, 5), 1);
  assertStrictEquals(euclideanAlgorithm(4, 2), 2);
  assertStrictEquals(euclideanAlgorithm(5, 2), 1);
  assertStrictEquals(euclideanAlgorithm(16, 32), 16);
  assertStrictEquals(euclideanAlgorithm(-12, 5), 1);
  assertStrictEquals(euclideanAlgorithm(512, -1024), 512);
});
