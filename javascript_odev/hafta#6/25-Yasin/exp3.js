// 3) Hangi kullanıcı 'Tamam harika teşekkürler' yorumunu yaptı?
const {users, comments} = require('./data.js');

const kullanici = comments.find(comment => comment.text == 'OK great thanks');
console.log(kullanici);

const kullanici1 = users.find(user => user.id == kullanici.userId)
console.log(kullanici1);


module.exports = kullanici1;