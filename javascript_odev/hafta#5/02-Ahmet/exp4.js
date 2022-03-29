// 4) Yorumlar dizisindeki her yoruma kullanıcının adını ve soyadını ekleyin

const { users, comments } = require('./data.js');

//users.forEach(user => console.log(user));
//console.log("aaaaaaaaaaaa");
//console.log(users);

const addCommentUser = comments.map(item => {
    user = users.filter(user => user.id === item.userId)[0];
    return {
        ...item,
        user
    }
});

console.log(addCommentUser);

addCommentUser.forEach((comment) => {
    console.log(comment.text + "                " + comment.user.firstName + " " + comment.user.lastName);

});
//addCommentUser
