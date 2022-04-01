// 4) Yorumlar dizisindeki her yoruma kullanıcının adını ve soyadını ekleyin

const {users, comments } = require('./data.js');

const yorumVeKullanici = comments.map(yorum => {
const kullanici = users.filter(kullanici => kullanici.id == yorum.userId)[0];
    return {
        ...yorum,
        kullaniciIsmi : kullanici.firstName + ' ' +  kullanici.lastName,
    }
});

console.log('Yorumlar dizisindeki her yoruma kullanıcının adını ve soyadını ekleyin');
console.log(yorumVeKullanici);