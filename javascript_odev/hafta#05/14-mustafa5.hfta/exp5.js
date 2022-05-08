// 5) Yorum yapmayan kullanıcıların listesini alın

const {users,comments} = require("./data.js");

const notcommenters = users.filter(user => comments.filter(comment => comment.userId == user.id).length == 0);

console.log(notcommenters);