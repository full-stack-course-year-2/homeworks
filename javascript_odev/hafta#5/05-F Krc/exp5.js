// 5) Yorum yapmayan kullanıcıların listesini alın

const {users, comments } = require('./data.js');

const sessizKullanici = users.filter(kullanici => comments.filter(yorum => yorum.userId == kullanici.id).length == 0);

console.log('Yorum yapmayan kullanıcıların listesini alın');
console.log(sessizKullanici);