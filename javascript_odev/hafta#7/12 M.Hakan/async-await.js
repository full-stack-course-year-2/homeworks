const Banka = "Akbank";

const promise_1 = () => {
    const result = new Promise((resolve, reject) => {
      
            if (Banka=="Akbank") {
                resolve("Akbankın siresi:");
              } else {
                reject("Yanlıs banka sectiniz");
              }
        
    });
    return result;
  };

const sifre=9;

const promise_2 = () => {
    const result = new Promise((resolve, reject) => {

            if (sifre==9) {
                resolve("9 doğru parola girdiniz");
              } else {
                reject("yanlıs sifre");
              }
           
    });
    return result;
  };



  const islem = async ()=>{
      await promise_1().then((a) => { console.log(a)}).
      catch((error1) => {
        console.error(error1);
      });

      await promise_2().then((b) => { console.log(b)}).
      catch((error2) => {
        console.error(error2);
      });
  }

  islem();
