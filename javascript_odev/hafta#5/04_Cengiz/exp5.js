// 5) Yorum yapmayan kullanıcıların listesini alın

const { comments, users } = require('./data');

let newList = [];

const comList = comments.forEach(function (params, i) {
    if (params.userId != users[i].id) {
        newList.push(users[i])
    }

})

console.log(newList)
