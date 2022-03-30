// 4) Yorumlar dizisindeki her yoruma kullanıcının adını ve soyadını ekleyin

const { comments, users } = require('./data');

let newList = [];

const comList = comments.forEach(function (params, i) {
    if (params.userId == users[i].id) {
        newList.push(
            {
                userId: params.userId,
                text: params.text,
                firstname: users[i].firstName,
                lastname: users[i].lastName

            })
    }

})

console.log(newList)
