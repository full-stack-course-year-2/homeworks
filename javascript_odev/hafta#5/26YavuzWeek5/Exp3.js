// 3) Hangi kullanıcı 'Tamam harika teşekkürler' yorumunu yaptı?
const { users, comments } = require('./Odev.js');

const result3 = comments.find( Comment => Comment.text === 'OK great thanks');
console.log(result3);



