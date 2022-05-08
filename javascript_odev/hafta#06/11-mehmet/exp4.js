// 4) Yorumlar dizisindeki her yoruma kullanıcının adını ve soyadını ekleyin

const { users, comments } = require('./odev');

let result = null;

result = comments.map(comment => {
    const { firstName, lastName  } = users.find(user => user.id == comment.userId)
    return {
        ...comment,
        firstName,
        lastName
    }
});
console.log(result);
module.exports = result;