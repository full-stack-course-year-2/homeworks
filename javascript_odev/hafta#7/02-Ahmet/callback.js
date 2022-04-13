

const data = [];

function willGetNewPhone() {
   
setTimeout(() => {
    data.forEach(element => {
        console.log(element);
    });
}, 2000);
    
}

function newPhone(phone, calback) {
    setTimeout(() => {
        data.push(phone);
        calback();
    }, 3000);
}

newPhone({name: 'Iphone 8', pric: 4000,  color: 'silver'}, willGetNewPhone);
