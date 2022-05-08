// 1) Madison Marshall'ın kullanıcı kimliği nedir?

const {comments} = require("./data.js");

const people=comments.filter(user=>user.text=='Cool, thanks!')[0].userId;
console.log(people);