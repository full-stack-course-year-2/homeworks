const { users, comments } = require("./data");

const comment = comments.find((comment) => comment.text === "OK great thanks");
const userId = comment.userId;
const user = users.find((user) => user.id === userId);
const userFullName = user.firstName + " " + user.lastName;
console.log("User full name : " + userFullName);
