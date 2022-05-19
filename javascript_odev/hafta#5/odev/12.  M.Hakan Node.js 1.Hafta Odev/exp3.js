 // 3) Hangi kullanıcı 'Tamam harika teşekkürler' yorumunu yaptı?

const { comments,users } = require("./data")

 const a=comments.find(comment=>comment.text=="OK great thanks")

const b= users.filter(user=>user.id==a.userId)

const commentUser = b[0].firstName+ " "+b[0].lastName;
console.log(commentUser)