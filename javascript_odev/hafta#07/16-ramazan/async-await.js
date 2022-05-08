// const test=true;
// function Auto(){
//     return new Promise((resolve ,reject) =>{
//         const test = true;
//         setTimeout(() => {
//             if(test){
//                 console.log("Elektirkli Auto schön");
//                 resolve();
//             } else {
//                 reject("falsch")
//             }
//         }, 4000);
//     })
// }

// function Auto1(){
//     return new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         if (test){
//             resolve ( console.log("Tesla gelecegin arabasi") );
//         }        
//     }, 3000);
//      })
// }


// async function duzenle(){
//     await Auto()
//     .then((bilgi) =>{
//         console.log(bilgi);
//     }).catch((e) => {
//         console.log(e);
//     })
//     Auto1()
//     .then((bilgi1) =>{
//         console.log(bilgi1);
//     })
// }
// duzenle();

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