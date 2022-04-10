const { users, comments } = require("./data");

const usersWithoutComment = [];

for (let index = 0; index < users.length; index++) {
  const user = users[index];
  const userId = user.id;
  const comment = comments.find((comment) => comment.userId === userId);
  if (comment === undefined) {
    usersWithoutComment.push(user);
  }
}

// users.forEach(user => {
//     const userId = user.id;
//     const comment = comments.find((comment) => comment.userId === userId);
//     if (comment === undefined) {
//       usersWithoutComment.push(user);
//     }
// });

console.log(usersWithoutComment);
