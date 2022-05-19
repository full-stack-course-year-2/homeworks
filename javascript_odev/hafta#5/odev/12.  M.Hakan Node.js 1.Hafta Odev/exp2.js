 // 2) İlk yorumu kim yazdı (ilk yorumun yorumlar dizisinin 0 konumunda olduğu varsayılarak)

 const{users,comments}= require("./data.js");


const a = users.filter( user => user.id==comments[0].userId);

const b= a[0].firstName+" "+a[0].lastName;
console.log(b)