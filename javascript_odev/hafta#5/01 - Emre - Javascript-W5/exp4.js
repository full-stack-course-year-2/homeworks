const {users,comments} = require('./data.js');

sonuc = comments.map(item => {
    return {
        ...item,
        fullName : users.map(ad => ad.id == comment.userId).firstName + " " + users.map(soyad => soyad.id == comment.userId).lastName
    }
});
console.log(sonuc);