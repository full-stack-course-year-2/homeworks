
function calculator(a,b,islem){

    var result= {
         sonuc:0,
         hata: '',
    }
    
         if(typeof(a) !== 'number'|| typeof(b) !== 'number'){
            result.hata = 'Lütfen Sayı Gırınız';
            return result;
        }
          if(islem == "/" && b ==0){
            result.hata="ıkıncı sayı 0 olamaz";
            return result;
        }
          if([ "+","-","*","/"].indexOf(islem)== -1 ){
            result.hata="hatali islem operatoru.";
            return result;}

          switch (islem) {
                case "+":
                    result.sonuc=a + b ;
                     break;
                case "-":
                    result.sonuc=a - b ;
                     break;
                case "*":
                    result.sonuc==a * b;
                     break;
                case "/":
                    result.sonuc=a /b ;
                     break;
                default:
                    result.sonuc=0;
                    break;
            }
            return result;
        
}

console.log(calculator(10,8,"+"))
console.log(calculator(10,8,"-"))
console.log(calculator(10,8,"*"))
console.log(calculator(10,8,"/"))


console.log(calculator(10,"saf","*"))
console.log(calculator(10,0,"/"))
console.log(calculator(10,2,"asfag"))