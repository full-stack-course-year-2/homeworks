const { users, comments } = require("./data");

let user = users.find(
  (user) => user.firstName === "Madison" && user.lastName === "Marshall"
);
let userId = user.id;

console.log(
  "User Id of " + user.firstName + " " + user.lastName + " : " + userId
);
