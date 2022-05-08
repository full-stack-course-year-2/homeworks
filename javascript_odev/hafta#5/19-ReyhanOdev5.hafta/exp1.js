// 1) Madison Marshall'ın kullanıcı kimliği nedir?
const {users} = require('./data.js').users
console.log(users);
const sonuc = users.filter(item => (item.lastName == 'Marshall'));
console.log(sonuc[0].id);