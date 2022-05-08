const userFullName = require("./exp3");

test("Hangi kullanıcı OK great thanks yorumunu yaptı = 7f053852-7440-4e44-838c-ddac24611050 omali ", () => {
  const user = "Jar Burke";

  expect(userFullName).toBe(user);
});
