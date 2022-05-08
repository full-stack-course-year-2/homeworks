 // 3) Hangi kullanıcı 'Tamam harika teşekkürler' yorumunu yaptı?

 const { users, comments } = require('./data.js');

 const userId = comments.filter(mess => mess.text === "OK great thanks")[0].userId;
 
 const whichUser = users.filter(user => user.id === userId)[0];

 console.log(whichUser.firstName + " " + whichUser.lastName);