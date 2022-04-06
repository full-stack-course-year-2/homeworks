// 5) Yorum yapmayan kullanıcıların listesini alın
const {users,comments} = require('./data.js');

let result = [];
const commentsId = comments.map(comment => comment.userId)
users.forEach(user => {
   if (commentsId.includes(user.id) == false) result.push(user);  
}) 


const sonuc = users.filter(user => commentsId.includes(user.id) == false);

console.log(sonuc);

