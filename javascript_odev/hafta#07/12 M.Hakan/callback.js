const sifreDogrulama=(bankaAdı,sifre)=>{
    setTimeout(()=>{
        console.log(bankaAdı+ " sifresi:");
        sifre(3,6);
    },4000)
}

const parola=(num1,num2)=>{
    setTimeout(()=>{
        if(num1+num2==9){
            console.log(" 9 doğru parola girdiniz")
        }else{
            console.log("yanlıs sifre")
        }
    },2000)
}



sifreDogrulama("Akbank",parola);