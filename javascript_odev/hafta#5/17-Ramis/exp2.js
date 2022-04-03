// 2) İlk yorumu kim yazdı (ilk yorumun yorumlar dizisinin 0 konumunda olduğu varsayılarak)

const {users, comments} = require('./data.js');
const yorum = users.find(item => item.id === comments[0]['userId']);
console.log(yorum);
