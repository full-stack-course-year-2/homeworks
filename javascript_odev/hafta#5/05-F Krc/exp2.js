// 2) İlk yorumu kim yazdı (ilk yorumun yorumlar dizisinin 0 konumunda olduğu varsayılarak)

const {users, comments } = require('./data.js');

let sonuc = users.find(item => item.id == '88f24bea-3825-4237-a0d1-efb6b92d37a4');
const yorumcu = {firstName : sonuc.firstName,
                 lastName : sonuc.lastName};

console.log('İlk yorumu kim yazdı (ilk yorumun yorumlar dizisinin 0 konumunda olduğu varsayılarak)');
console.log(yorumcu);