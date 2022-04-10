// 5) Yorum yapmayan kullanıcıların listesini alın

const { comments, users } = require("./data");

const newComments = comments.map((item) => {
  const user = users.find((user) => user.id != item.userId);
  return {
    ...item,
    name: `${user.firstName} ${user.lastName}`,
  };
});

console.log(newComments);
