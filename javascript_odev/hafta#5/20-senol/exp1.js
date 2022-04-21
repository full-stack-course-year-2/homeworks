// 1) Madison Marshall'ın kullanıcı kimliği nedir?

const { users, comments } = require('./data.js');


result = users.find(item => (item.firstName == "Madison" && item.lastName == "Marshall"  ) );
console.log(result.id)