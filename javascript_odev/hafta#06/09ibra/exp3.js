// 3) Hangi kullanıcı 'Tamam harika teşekkürler' yorumunu yaptı?

const {comments} = require('./data.js');

sonuc = comments.filter(item=> item.text == "OK great thanks");
console.log(sonuc);

module.exports = sonuc;