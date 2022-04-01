// 5) Yorum yapmayan kullanıcıların listesini alın
const { users, comments } = require('./data.js');


    for( let i = 0; i < users.length; i++)
    {
        let varmi = false;
        for ( let x = 0; x < comments.length; x++)
        { 

            if (comments[x].userId.includes(users[i].id))
            {
                varmi = true;
                break;
            }
        }

        if (varmi == false)
        {
            console.log(users[i].firstName);
        }
        
    }

    



