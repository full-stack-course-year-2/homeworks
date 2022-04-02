// 4) Yorumlar dizisindeki her yoruma kullanıcının adını ve soyadını ekleyin
const {users,comments} = require('./data.js');

sonuc = comments.map(item => {
    return {
        ...item,
        fullName : users.map(ad => ad.id == comments.userId).firstName + " " + users.map(soyad => soyad.id == comments.userId).lastName
    }
});
console.log(sonuc);
