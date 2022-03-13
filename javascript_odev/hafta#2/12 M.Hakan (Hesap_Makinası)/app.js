

var result = {
  sonuc:0,
  hata:"Hata yok"
};

function HesapMakinası(s1,s2,islm){


console.log(typeof(s1) + " " +s1);
console.log(typeof(s2) + " " +s2);
console.log(typeof(islm) + " "+ islm);

if ( typeof s1== "number" && typeof s2 == "number" ){

  switch(islm){
    case "+":
    result.sonuc=s1+s2;
    break;

    case "-":
    result.sonuc=s1-s2;
    break;

    case "*":
    result.sonuc=s1*s2;
    break;

    case "/":
    result.sonuc=s1/s2;
    break;

    default:
     result.hata="yanlıs deger girdiniz"
     break

  }

  console.log(result.sonuc)

}

if( s2==0 && islm == "/" ){
  result.hata="sayıyı sıfıra bolmeye calıstınız.Sonuc sonsuzdur";
  console.log(result.hata);
}

 if("number" !== typeof s1    ){

  result.hata="s1  ye sayı degeri girmediniz."
console.log(result.hata );

}

if("number" !== typeof s2  ){

  result.hata="s2 ye sayı degeri girmediniz."
console.log(result.hata);

}

 if (!(islm== "*" || islm == "/" || islm == "+" || islm == "-")) {
  result.hata ="dört islemden birini girmediniz"
  console.log(result.hata)
  console.log(islm)

   
}

return result;



}


console.log(result)
console.log(HesapMakinası(8,0,"/"))
console.log(result)
