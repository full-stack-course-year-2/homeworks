const { users, comments } = require("./data");

for (let index = 0; index < comments.length; index++) {
  const comment = comments[index];
  const user = users.find((user) => user.id === comment.userId);

  comment["fisrtName"] = user.firstName;
  comment["lastName"] = user.lastName;
}

// comments.forEach((comment) => {
//   const user = users.find((user) => user.id === comment.userId);

//   comment["fisrtName"] = user.firstName;
//   comment["lastName"] = user.lastName;
// });

console.log(comments);
