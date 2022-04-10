// 1) Madison Marshall'ın kullanıcı kimliği nedir?

const { users } = require('./data.js');

const madisonIdBring = users.filter(user => user.firstName === "Madison" && user.lastName === "Marshall")[0].id;

console.log("Madison Marshall's ID: " + madisonIdBring);

