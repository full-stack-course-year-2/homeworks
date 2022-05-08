function hesaplama (y,z,islem){
    var result= {
         sonuc:0,
         hata: '',
    }

         if(typeof(y) !== 'number'|| typeof(z) !== 'number'){
            result.hata = 'Sayı Giriniz';
            return result;
        }
          if(islem == "/" && z ==0){
            result.hata="z sayisi 0 olamaz";
            return result;
        }
          if([ "+","-","*","/"].indexOf(islem)== -1 ){
            result.hata="hatali islem operatoru.";
            return result;}

          switch (islem) {
                case "+":
                    result.sonuc=y + z ;
                     break;
                case "-":
                    result.sonuc=y - z ;
                     break;
                case "*":
                    result.sonuc=y * z;
                     break;
                case "/":
                    result.sonuc=y / z ;
                     break;
                default:
                    result.sonuc=0;
                    break;
            }
            return result;

}

console.log(hesaplama(15,5,"+"))
console.log(hesaplama(15,5,"-"))
console.log(hesaplama(15,5,"*"))
console.log(hesaplama(15,5,"/"))


console.log(hesaplama(15,"abc","*"))
console.log(hesaplama(15,0,"/"))
console.log(hesaplama(15,4,"abcde"))