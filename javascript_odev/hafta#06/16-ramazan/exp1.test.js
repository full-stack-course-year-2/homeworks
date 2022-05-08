const { users } = require("./odev");
const result = require("./exp1");

test("Madison Marshall'ın kullanıcı kimliği = b4a306cb-8b95-4f85-b9f8-434dbe010985 olmalıdır.", () => {
  expect(result.id).toContain(users[5].id);
});