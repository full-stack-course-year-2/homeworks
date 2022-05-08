// 3) Hangi kullanıcı 'Tamam harika teşekkürler' yorumunu yaptı?

const {users,comments} = require("./data.js");

const whichUsers=comments.filter(item=>item.text=='OK great thanks')[0].userId;
console.log(whichUsers);