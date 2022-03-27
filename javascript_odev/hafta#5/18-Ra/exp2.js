// İlk yorumu kim yazdı (ilk yorumun yorumlar dizisinin 0 konumunda olduğu varsayılarak)

const { users, comments } = require('./data.js');

const firstCommentUser = users.filter(user => user.id === comments[0].userId)[0];
console.log("First comment's user first and last name: " + firstCommentUser.firstName + " " + firstCommentUser.lastName);
