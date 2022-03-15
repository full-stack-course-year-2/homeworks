function calc( sayi_1, sayi_2, islem ) {
    var result = {
     sonuc : 0,
     hata : ""
    }
    
    if (typeof sayi_1 !== 'number' || typeof sayi_2 !== 'number') {
        result.hata = 'Lütfen sayi giriniz.'
         }

else if ( islem == "/" && sayi_2 == 0) {
    result.hata = "bölme isleminde ikici sayi sifir olamaz."
}

else if ( [ "+" , "-" , "/" , "*"].indexOf(islem) == -1) {
    result.hata = "Hatali islem operatorü"
}

else { 
    switch (islem) {
        case "+" :
            result.sonuc = sayi_1 + sayi_2 ;
            break;
        case "-" :
            result.sonuc = sayi_1 - sayi_2 ;
            break;
        case "*" :
            result.sonuc = sayi_1 * sayi_2 ;
            break;       
        case "/" :
            result.sonuc = sayi_1 / sayi_2 ;
            break;
        default :
            result.sonuc = 0 ;
            // result.hata = "Hatali islem"
            break;           
        }
    }
    
return result ; 

}

console.log('toplama', calc(5, 2, "+"));
console.log('cikarma', calc(5, 2, "-"));
console.log('bölme', calc(5, 2, "/"));
console.log('carpma', calc(5, 2, "*"));
console.log('-----------------------');

console.log('hata', calc(5, '25', "*"));
console.log('hata', calc(5, 0, "/"));
console.log('hata', calc(5, 2, "ja"));