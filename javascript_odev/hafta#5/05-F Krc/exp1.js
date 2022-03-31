// 1) Madison Marshall'ın kullanıcı kimliği nedir?

const {users, comments } = require('./data.js');

result = users.filter(item => item.firstName == 'Madison' && item.lastName == 'Marshall');
idNo  = result.map(person => person.id);

console.log('Madison Marshall ın kullanıcı kimliği nedir?');
console.log(idNo);