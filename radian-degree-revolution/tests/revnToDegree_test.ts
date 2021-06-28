import { assertStrictEquals } from "https://deno.land/std@0.99.0/testing/asserts.ts";
import { revnToDegree } from "../revnToDegree.ts";

Deno.test("revnToDegree", () => {
  assertStrictEquals(revnToDegree(0), 0);
  assertStrictEquals(revnToDegree(1), 360);
  assertStrictEquals(revnToDegree(2), 720);
  assertStrictEquals(revnToDegree(3), 1080);
});
