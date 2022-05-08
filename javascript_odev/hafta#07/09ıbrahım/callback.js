const users =  require('./data');

function usersList () {
    setTimeout(() => {
        users.filter((item)=>{item.gpa>3.0,
            console.log(item);
         })
    }, 3000);
    }
 
function newUser(yeni,taze,callback){
   setTimeout(() => {
    users.push(yeni,taze);
     callback();
   },4000);
}
newUser(
    {firstname:'Muhammet', lastname:'Hoca' ,gpa:3.50},
     userList
    );

    result = users.filter(item=>item.gpa >3.0),
    console.log(result);

 