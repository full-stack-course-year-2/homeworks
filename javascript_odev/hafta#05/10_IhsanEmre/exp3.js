// 3) Hangi kullanıcı 'Tamam harika teşekkürler' yorumunu yaptı?+

const { users, comments } = require('./data.js');

result = comments.find(item => (item.text == "OK great thanks") );
console.log(result)