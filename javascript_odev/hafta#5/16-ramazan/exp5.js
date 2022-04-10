 // 5) Yorum yapmayan kullanıcıların listesini alın???
 const { users, comments } = require('./data.js');

const notCommented = users.filter(user => comments.filter(comment => comment.userId === user.id).length === 0);


notCommented.forEach((user, index) => {
    console.log((index + 1).toString() + "- " + user.firstName + " " + user.lastName);
});