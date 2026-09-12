const test = require("node:test");
const assert = require("node:assert/strict");
const { validateCommitCount } = require("./index");

test("accepts a positive integer", () => {
  assert.doesNotThrow(() => validateCommitCount(7));
});

test("rejects zero, negative, and fractional values", () => {
  for (const value of [0, -1, 1.5, Number.NaN]) {
    assert.throws(() => validateCommitCount(value), /positive integer/);
  }
});