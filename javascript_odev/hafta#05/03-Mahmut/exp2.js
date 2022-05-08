const { users, comments } = require("./data");

const firtsCommentUserId = comments[0].userId;
const firstCommentUser = users.find((user) => user.id === firtsCommentUserId);

console.log(
  "First comment user : " +
    firstCommentUser.firstName +
    " " +
    firstCommentUser.lastName
);
