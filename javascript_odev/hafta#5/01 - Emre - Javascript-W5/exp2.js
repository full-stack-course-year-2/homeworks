const { users, comments } = require('./data.js');

sonuc = users.find(item => {
    item = item.id == comments[0].userId
    return item
});
console.log(sonuc);