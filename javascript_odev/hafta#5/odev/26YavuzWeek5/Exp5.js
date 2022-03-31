// 5) Yorum yapmayan kullanıcıların listesini alın
const { users, comments } = require('./Odev.js');

const result5 = comments.filter(comment => comment.userId != users.id);
console.log(result5);