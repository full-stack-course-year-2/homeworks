// 2) İlk yorumu kim yazdı (ilk yorumun yorumlar dizisinin 0 konumunda olduğu varsayılarak)

const { users, comments } = require('./odev');

let result = null;

result = users.find(user => user.id === comments[0].userId);
console.log(result);

module.exports = result;