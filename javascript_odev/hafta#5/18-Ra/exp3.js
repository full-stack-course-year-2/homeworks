// Hangi kullanıcı 'Tamam harika teşekkürler' yorumunu yaptı?

const { users, comments } = require('./data.js');


const userWhoWroteTamam = users.filter(user => user.id === comments.filter(comment => comment.text === 'OK great thanks')[0].userId)[0];
console.log("User who wrote 'Tamam harika teşekkürler': " + userWhoWroteTamam.firstName + " " + userWhoWroteTamam.lastName);
