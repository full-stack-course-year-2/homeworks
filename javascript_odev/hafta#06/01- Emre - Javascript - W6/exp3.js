// 3) Hangi kullanıcı 'OK great thanks' yorumunu yaptı?

const { users, comments } = require('./Odev.js');

let result = null;

result = users.find(user => { 
    let yorumuYapan = (comments.find(comment => comment.text == 'OK great thanks'));
    return yorumuYapan.userId == user.id;
});
console.log(result);
module.exports = result;