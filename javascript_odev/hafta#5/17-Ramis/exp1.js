// 1) Madison Marshall'ın kullanıcı kimliği nedir?



const {users, comments} = require('./data.js');

let id = users.filter(item => item.firstName == 'Madison' && item.lastName == 'Marshall').map(kimlik => kimlik.id) ;
console.log("id: ", id);