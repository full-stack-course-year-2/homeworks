// 4) Yorumlar dizisindeki her yoruma kullanıcının adını ve soyadını ekleyin

const { users, comments } = require("./Odev.js");

let result = null;

result = comments.map((comment) => {
  const { firstName, lastName } = users.find(
    (user) => user.id == comment.userId
  );
  return {
    ...comment,
    // firstName: users.find(user => user.id == comment.userId).firstName,
    // lastName: users.find(user => user.id == comment.userId).lastName,
    firstName,
    lastName,
  };
});
console.log(result);

module.exports = result;