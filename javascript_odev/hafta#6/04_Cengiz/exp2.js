// 2) İlk yorumu kim yazdı (ilk yorumun yorumlar dizisinin 0 konumunda olduğu varsayılarak)

const {comments, users} = require('./data');

const firstComment = users.find(item =>{
    
    return item.id == comments[0].userId;
})

console.log(firstComment.firstName + " " + firstComment.lastName);

module.exports= firstComment;
