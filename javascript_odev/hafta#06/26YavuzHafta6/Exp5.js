// 5) Yorum yapmayan kullanıcıların listesini alın

const {users, comments} = require('./data');

let result = null;

result = users.filter(user => {
    let yorumYapanlar = comments.find(comment => comment.userId == user.id);
    return !yorumYapanlar;
});

console.log(result);
module.exports = result;