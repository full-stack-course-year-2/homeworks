// 5) Yorum yapmayan kullanıcıların listesini alın
const {users,comments} = require('./data.js');

sonuc = users.map(user => {
    return{
        ...user,
        commentVar : (comments.some(comment => comment.userId == user.id))?'Var':'Yok'
    }
});

console.log(sonuc);
