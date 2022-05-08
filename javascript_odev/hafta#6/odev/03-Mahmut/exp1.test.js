const userId = require("./exp1");
test("Madison Marshall'ın kullanıcı kimliği = b4a306cb-8b95-4f85-b9f8-434dbe010985 olmali", () => {
  expect(userId).toBe("b4a306cb-8b95-4f85-b9f8-434dbe010985");
});
