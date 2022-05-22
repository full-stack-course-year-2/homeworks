// 1) Madison Marshall'ın kullanıcı kimliği nedir?

const {users} = require("./data.js");
let a = users.filter(user=>(user.firstName=="Madison" && user.lastName=="Marshall"))
console.log(a[0].id);
