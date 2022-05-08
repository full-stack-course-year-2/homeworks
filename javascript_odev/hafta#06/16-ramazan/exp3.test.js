const result = require("./exp3");

test("OK great thanks yorumu yapan user ile eşleşmeli", () => {
  const user = {
    id: "7f053852-7440-4e44-838c-ddac24611050",
    firstName: "Jar",
    lastName: "Burke",
  };
  expect(result).toMatchObject(user);
});