const {users,comments} = require("./data.js");


sonuc = users.filter(user => comments.filter(comment => comment.userId == user.id).length == 0);

console.log(sonuc);

module.exports = sonuc;

