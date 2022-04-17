const users = require('./data');

function userslist () {
    setTimeout(() => {
        users.filter((user) => {user.firstName === 'Madison',
        
    console.log(user);
})
    }, 3000);
}

function newuser (item, callback) {
    setTimeout(() => {
        users.push(item);
        callback();
    },4000);
}
newuser(
    { 
    id: '23456789', 
    firstName:'Swen', 
    lastName: 'Rudolf'
 },
    userslist
);
newuser