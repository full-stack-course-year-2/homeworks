// 3) Hangi kullanıcı 'Tamam harika teşekkürler' yorumunu yaptı?

const {users, comments } = require('./data.js');

sonuc = comments.filter(item => item.text == 'OK great thanks');
idNo  = sonuc.map(person => person.userId);
yorumcuId = users.filter(item => item.id == idNo);
yorumcu = yorumcuId.map(item => {
    return {
        yorumcu :item.firstName + ' ' + item.lastName,
    }
});

console.log('Hangi kullanıcı -Tamam harika teşekkürler- yorumunu yaptı?');
console.log(yorumcu);