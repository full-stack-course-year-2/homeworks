// 5) Yorum yapmayan kullanıcıların listesini alın

const { comments, users } = require("./data");

let noCommentUser = users.map(user => {
    return{
        ...user,
        comment: comments.some(comment => comment.userId == user.id),   
    }

});

noCommentUser= noCommentUser.filter((val) => !val.comment)
noCommentUser = noCommentUser.map((item) =>{
    return {
        id: item.id,
        firstName: item.firstName,
        lastName: item.lastName,
    }
})

console.log(noCommentUser);

module.exports= noCommentUser;