// 5) Yorum yapmayan kullanıcıların listesini alın
const { users, comments } = require('./Odev.js');

result5 = users.map(user => {
    return{
        ...user,
        userCommentVarMi : (comments.some(comment => comment.userId == user.id))?'Var':'Yok'
    }
});

console.log(result5);