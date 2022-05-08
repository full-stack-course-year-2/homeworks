const test =true; 
function selamla() {
  return new Promise((resolve, reject) => {
   if(test) {
     setTimeout(() => {
        resolve(console.log("Hey, Merhaba Nasılsın."));
     },3000);}
     else {
      reject("hata!");}
  });
 }

 
 function selamla1(){
     return new Promise((resolve,reject)=>{
        setTimeout(() => {
         if(test){
             resolve( console.log('İyiler,bu hafta tatile gidiyoruz'))
         }
       }, 5000);
     })
    }
   
   
    function selamlama2(){
      return new Promise((resolve,reject)=>{
          setTimeout(() => {
              if(test){
                  resolve(console.log('Teşekkür Ederim İyiyim Ya Sen!'))
              }
          }, 3000);
      })
    }
      

  function selamlama3(){
      return new Promise((resolve,reject)=>{
          setTimeout(() => {
              if(test){
                  resolve( console.log('Bende iyiyim,ailen nasıl'))
              }
          }, 1000);
      })
    }
     
   async function dogruSiralama(){
   await  selamla()
     .then((data)=>{
         console.log(data);
     }).catch((e)=>{console.log(e);})
       selamla1()
      .then((data1)=>{
        console.log(data1);
    })
     await   selamlama2()
      .then((data2)=>{
        console.log(data2);
    })
       selamlama3()
      .then((data3)=>{
        console.log(data3);
    })
 }

 dogruSiralama();

