// 4) Yorumlar dizisindeki her yoruma kullanıcının adını ve soyadını ekleyin
const {users,comments} = require("./data.js");
 
const newComments=comments.map((item)=>{
    const user=users.find((user)=>user.id==item.userId);
    return{
        ...item,
        name:` ${user.firstName}  ${user.lastName} `,
    };
});
console.log(newComments)