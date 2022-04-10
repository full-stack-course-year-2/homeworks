// 2) İlk yorumu kim yazdı (ilk yorumun yorumlar dizisinin 0 konumunda olduğu varsayılarak)

const {users, comments} = require('./data.js');
//console.log(comments);

const kullanici = comments.find(item => item.text == 'Great Job!') 
//console.log(kullanici);     // mesaj uzerinden yapmaya calistim.


const kullanici2 = users.find(item => item.id == comments[0]['userId']);
console.log(kullanici2);




const  ilkYorum = users.find(yorum => {
    return{
      yorumYazan :  yorum.id === kullanici.userID    }
})
    
 
//console.log(ilkYorum);   


