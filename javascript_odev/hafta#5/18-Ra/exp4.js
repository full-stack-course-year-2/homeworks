// Yorumlar dizisindeki her yoruma kullanıcının adını ve soyadını ekleyin

const { users, comments } = require('./data.js');

// add user's first and last name to each mapped comment
newCommentList = comments.map(comment => {
    user = users.filter(user => user.id === comment.userId)[0];
    return {
        ...comment,
        user
    }
});

// prinrt each newCommentList
newCommentList.forEach((comment, index) => {
    console.log((index + 1).toString() + "- " + comment.user.firstName + " " + comment.user.lastName + ": " + comment.text);
});
