const result = require("./exp3");

test("User who wrote 'Tamam harika teşekkürler' is 'Jar Burke'", () => {
  expect(result.userWhoWroteTamam.firstName).toBe("Jar");
  expect(result.userWhoWroteTamam.lastName).toBe("Burke");
});
