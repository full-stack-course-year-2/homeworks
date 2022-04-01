// 1) Madison Marshall'ın kullanıcı kimliği nedir?

const {users, comments } = require('./data.js');

let result = users.filter(item => item.firstName == 'Madison' && item.lastName == 'Marshall');
const idNo  = result.map(person => person.id);

console.log('Madison Marshall ın kullanıcı kimliği nedir?');
console.log(idNo);