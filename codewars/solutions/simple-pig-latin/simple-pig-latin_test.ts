import { assertEquals } from "https://deno.land/std@0.60.0/testing/asserts.ts";
import { pigIt } from "./simple-pig-latin.ts";

Deno.test("Calculating with Functions", () => {
  assertEquals(
    pigIt("Pig latin is cool"),
    "igPay atinlay siay oolcay",
  );
  pigIt("This is my string"), "hisTay siay ymay tringsay";
});
