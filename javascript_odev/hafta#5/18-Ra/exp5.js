// Yorum yapmayan kullanıcıların listesini alın

const { users, comments } = require('./data.js');

const usersWhoHaveNotCommented = users.filter(user => comments.filter(comment => comment.userId === user.id).length === 0);


console.log('Users who have not commented:');
usersWhoHaveNotCommented.forEach((user, index) => {
    console.log((index + 1).toString() + "- " + user.firstName + " " + user.lastName);
}
);

