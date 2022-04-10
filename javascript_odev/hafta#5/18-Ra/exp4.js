// Yorumlar dizisindeki her yoruma kullanıcının adını ve soyadını ekleyin

const { users, comments } = require('./data.js');

newCommentList = comments.map(comment => {
    user = users.filter(user => user.id === comment.userId)[0];
    return {
        ...comment,
        user
    }
});

newCommentList.forEach((comment, index) => {
    console.log((index + 1).toString() + "- " + comment.user.firstName + " " + comment.user.lastName + ": " + comment.text);
});
