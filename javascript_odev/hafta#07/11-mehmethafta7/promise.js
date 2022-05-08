
function selamlama()
  {
  return new Promise((resolve, reject) => {
  const test =true; 
  setTimeout(() => {
    if(test) {
     console.log("Hey, Merhaba Nasılsın.");
      resolve();
    } else {
      reject("hata!");
  }
  }, 3000);
    
     });
 }
  	
  
  function selamla1(){
    setTimeout(() => {
        console.log('İyiler,bu hafta tatile gidiyoruz');
    }, 4000);
   }

 function selamlama2(){
     setTimeout(() => {
        console.log('Bende iyiyim,ailen nasıl');
     }, 1000);
  }

  function selamlama3(){
      console.log("Teşekkür Ederim İyiyim Ya Sen!");
  }
  selamlama()
  .then((data) => {
    selamla1();
   })
   .then((data)=>{
    selamlama2()
   })
   .then((data)=>{
       selamlama3()
   })
  .catch((error) => {
     console.log(error); 
  });