// 1) Madison Marshall'ın kullanıcı kimliği nedir?



const {users} = require('./data.js');

//console.log(users);

let kullanici = null;

kullanici = users.find(item => item.firstName == 'Madison' && item.lastName == 'Marshall') ;
console.log(kullanici.id);


module.exports = kullanici;
