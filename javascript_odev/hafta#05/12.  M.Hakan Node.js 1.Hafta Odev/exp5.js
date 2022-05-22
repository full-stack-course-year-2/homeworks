//5) Yorum yapmayan kullanıcıların listesini alın

const {users, comments}= require("./data.js")

const yorumyapmayan = users.filter(user => !comments.find(comment => comment.userId == user.id ))
console.log(yorumyapmayan);

