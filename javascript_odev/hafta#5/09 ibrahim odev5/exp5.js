// 5) Yorum yapmayan kullanıcıların listesini alın
const {users,comments} = require('./data.js');

sonuc = comments.some((item => item = users.id == comments.userId)? -1 : 1);

console.log(sonuc);
