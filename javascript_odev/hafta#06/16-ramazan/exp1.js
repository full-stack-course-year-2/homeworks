// 1) Madison Marshall'ın kullanıcı kimliği nedir?

const { users } = require("./odev.js");

let result = null;

result = users.find(
  (user) => user.firstName === "Madison" && user.lastName === "Marshall"
);
console.log(result.id);

module.exports = result;