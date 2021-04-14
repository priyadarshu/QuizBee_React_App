const responses = ".index.js";

test("Some test", () => {
  expect(responses).toBe(5);
  expect(responses).not(55);
});
