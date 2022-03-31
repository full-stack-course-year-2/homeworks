// 4) Yorumlar dizisindeki her yoruma kullanıcının adını ve soyadını ekleyin
const { users, comments } = require('./Odev.js');

result4 = comments.map(comment => {
    return{
        ...comment,
        firstName : users.find(user => user.id === comment.userId).firstName + " " + users.find(user => user.id === comment.userId).lastName
    }
});
console.log(result4);