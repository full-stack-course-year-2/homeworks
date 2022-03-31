const { users } = require('./Odev.js');



// 1) madison marschallin kullanici kimligi nedir.

const result1 = users.filter(user => user.firstName === 'Madison' && user.lastName === 'Marshall');

console.log(result1[0].id);



