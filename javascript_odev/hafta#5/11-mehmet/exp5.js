// 5) Yorum yapmayan kullanıcıların listesini alın
const {users,comments} = require("./data.js");
const notComments = users.filter(user => comments.filter(comment => comment.userId == user.id).length == 0);

console.log(notComments);