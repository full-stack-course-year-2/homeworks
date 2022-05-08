// 3) Hangi kullanıcı 'Tamam harika teşekkürler' yorumunu yaptı?


const {users, comments} = require('./data.js');

const yorumYapanId = comments.find(comment => comment.text == 'OK great thanks');
const  result = users.find(user => user.id == yorumYapanId.userId)
console.log(yorumYapanId.text + '=' +  result.firstName +' '+ result.lastName);