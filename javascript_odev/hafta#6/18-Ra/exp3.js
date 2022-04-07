// 3) Hangi kullanıcı 'OK great thanks' yorumunu yaptı?

const { users, comments } = require('./Odev.js');

const userWhoWroteTamam = users.filter(user => user.id === comments.filter(comment => comment.text === 'OK great thanks')[0].userId)[0];

console.log("User who wrote 'Tamam harika teşekkürler': " + userWhoWroteTamam.firstName + " " + userWhoWroteTamam.lastName);


module.exports = {userWhoWroteTamam};