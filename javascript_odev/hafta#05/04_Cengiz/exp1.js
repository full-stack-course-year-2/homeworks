// 1) Madison Marshall'ın kullanıcı kimliği nedir?

const {users} = require('./data.js');

const idMadMar = users.find(item=>{
    return item.firstName == 'Madison' && item.lastName == 'Marshall'
})

console.log(idMadMar.id);