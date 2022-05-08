const users = require('./data');

function userslist () {
    setTimeout(() => {
        users.filter((user) => {user.firstName === 'Madison',
        
    console.log(user);
})
    }, 3000);
}

function newuser (item,) {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            users.push(item);
            const eror = false;
            if(eror){
                resolve();
            } else {
                reject('hata');
            }
            
            
        }, 4000);

    })

 }

newuser(
    { 
    id: '57114531923', 
    firstName:'Talha', 
    lastName: 'Isgören'
 }).then((response)=>{
     userslist();
 }).catch((a)=>{
     console.log(a);
 });
