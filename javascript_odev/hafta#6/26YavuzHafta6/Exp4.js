// 4) Yorumlar dizisindeki her yoruma kullanıcının adını ve soyadını ekleyin

const {users, comments} = require('./data');

let result = null;

result = comments.map(yorum => {
    const { firstName , lastName } = users.find(user => user.id == yorum.userId);
    return {
        ...yorum,
        // firstName: users.find(user => user.id == yorum.userId).firstName,
        // lastName: users.find(user => user.id == yorum.userId).lastName
        firstName,
        lastName
    }
});
console.log(result);
module.exports = result;