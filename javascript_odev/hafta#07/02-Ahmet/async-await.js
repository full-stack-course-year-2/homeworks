const data = [];
const isMomHappy = true;

const willGetNewPhone = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const phone = {
                name: 'Iphone 8',
                pric: 4000,
                color: 'silver'
            };
            data.push(phone);
            
            if(isMomHappy){
                //resolve(data); burda aşagıdaki acıklama için burda veri gondermemiz gerekiyor
                resolve();
            } else {
                const error = new Error("mom is not happy");
                reject(error);
            }
        }, 3000);
        
    });

};



const showToFriends = function(data) {
    const message = "He friends this is my new phone " + data[0].name;
    return console.log(message);
}


async function runTime() {
    await willGetNewPhone()
          showToFriends(data);
}

runTime();
