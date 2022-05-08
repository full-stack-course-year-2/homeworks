// 2) İlk yorumu kim yazdı (ilk yorumun yorumlar dizisinin 0 konumunda olduğu varsayılarak)

const { users, comments } = require('./data.js');

sonuc = users.find(item => {
    item = item.id == comments[0].userId
    return item
});
console.log(sonuc);

module.exports  = sonuc;
