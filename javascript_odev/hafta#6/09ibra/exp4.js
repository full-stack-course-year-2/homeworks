// 4) Yorumlar dizisindeki her yoruma kullanıcının adını ve soyadını ekleyin

const { users, comments } = require('./data.js');


    sonuc = comments.map(item => {
        return {
            ...item,
            firstName: users.find(user => user.id == item.userId).firstName,
            lastName: users.find(user => user.id == item.userId).lastName
        }});
    
        console.log(sonuc)
    


module.exports=sonuc;
