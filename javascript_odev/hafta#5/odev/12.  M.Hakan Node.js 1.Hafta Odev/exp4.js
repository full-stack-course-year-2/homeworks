// 4) Yorumlar dizisindeki her yoruma kullanıcının adını ve soyadını ekleyin

const {users, comments} = require("./data.js")

const a = (id) => users.find((user) => user.id === id);

const b = comments.map((comment) => {
let user = a(comment.userId);
return { ...comment, firstName: user.firstName, lastName: user.lastName };
});
console.log(b);