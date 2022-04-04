// 3) Hangi kullanıcı 'Tamam harika teşekkürler' yorumunu yaptı?
const {users,comments} = require("./data.js");

const newuser=comments.filter(item=>item.text=='OK great thanks')[0].userId;
console.log(newuser);
