// 2) İlk yorumu kim yazdı (ilk yorumun yorumlar dizisinin 0 konumunda olduğu varsayılarak)

const { users, comments } = require('./Odev.js');

const result2 = users.find(item => item.id == comments[0].userId);
console.log(result2);

