// 3) Hangi kullanıcı 'Tamam harika teşekkürler' yorumunu yaptı?

const {comments, users} = require('./data');

const greatThanksComment = comments.find(item =>{
    
    return item.text == 'OK great thanks';
})

const greatThanksUser = users.find(item =>{

    return item.id == greatThanksComment.userId;

})

console.log(greatThanksUser.firstName + " " + greatThanksUser.lastName);