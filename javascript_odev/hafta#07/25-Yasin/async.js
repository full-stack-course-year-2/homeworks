const yeniSatis = [];
const durum = false;


function dataLoader() {
   return new Promise((resolve, reject) => {
     setTimeout(() => {
        const orders = require('./promise');
        orders.push(yeniSatis);   
        if (!durum){
            resolve()
        }else{
            reject("Hata var, satis islemi yapilamadi..")
        }
               
    }, 2000);
});  
}

function satisYap() {
    setTimeout(() => {
      //  yeniSatis.forEach((item) => console.log(item));
    }, 3000);
}

async function satisVakti() {
    await dataLoader();
    satisYap();
}

satisVakti ();
   
    



