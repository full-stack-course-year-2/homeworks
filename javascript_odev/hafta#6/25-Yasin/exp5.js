// 5) Yorum yapmayan kullanıcıların listesini alın

const {users, comments} = require('./data.js');

let result = [];
const commentsId = comments.map(comment => comment.userId)
users.forEach(user => {
   if (commentsId.includes(user.id) == false) result.push(user);  
}) 

//console.log(result);

const result2 = users.filter(user => commentsId.includes(user.id) == false);

console.log(result2);

module.exports = result2;

