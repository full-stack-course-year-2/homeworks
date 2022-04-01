// 3) Hangi kullanıcı 'Tamam harika teşekkürler' yorumunu yaptı?

const {users, comments } = require('./data.js');

let sonuc = comments.find(item => item.text == 'OK great thanks');
const yorumcuId = users.filter(item => item.id == sonuc.userId);
let yorumcu = yorumcuId.map(item => {
    return {
        yorumcu :item.firstName + ' ' + item.lastName,
    }
});

console.log('Hangi kullanıcı -Tamam harika teşekkürler- yorumunu yaptı?');
console.log(yorumcu);