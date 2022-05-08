// 1) Madison Marshall'ın kullanıcı kimliği nedir?

const {comments} = require("./data.js");

const personId=comments.filter(item=>item.text==='Cool, thanks!')[0].userId;
console.log(personId);