// 1) Madison Marshall'ın kullanıcı kimliği nedir?



const {users} = require('./data.js');

console.log(users);


const kullanici = users.filter(item => item.firstName == 'Madison' && item.lastName == 'Marshall').map(kimlik => kimlik.id) ;
console.log("Madison Marshall'in id Numarasi: ", kullanici);


