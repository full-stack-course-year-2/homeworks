// 4) Yorumlar dizisindeki her yoruma kullanıcının adını ve soyadını ekleyin

const {users, comments} = require('./data.js');

result = comments.map(comment => {
    return {
        ...comment,
        fullName : users.find(user => user.id === comment.userId).firstName + " " +users.find(user => user.id === comment.userId).lastName
         
    }
});

console.log(result);