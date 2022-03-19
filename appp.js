function calc(deger_1, deger_2, komut) {
var result = {
    sonuc:0,
    hata:'!'
}

if ((typeof deger_1 !== 'number') || (typeof deger_2 !== 'number')) {
    result.hata = 'sayı giriniz.'
  
} 
if (komut == '/' && deger_2 == 0) {
    result.hata = 'Hatalı bölme'
    
}

if(['+', '-', '/', '*'].indexOf(komut) !== -1) {
    result.hata = 'Hatali islem.'
}
     else {
    switch (komut) {
        case 'topl':
            result.sonuc = deger_1 + deger_2;
            break;
        case 'cik': 
            result.sonuc = deger_1 - deger_2;
            break;
        case 'böl': 
            result.sonuc = deger_1 / deger_2;
            break;
        case 'carp': 
            result.sonuc = deger_1 * deger_2;
            break;
        default:
            result.sonuc = 0;
            break;

        }
      
    }
    return result;
}
console.log('Toplama işlemi Sonucu = ', calc(3, 5, "topl"));
console.log('Çıkarma İşlemi Sonucu =  ', calc(10, 20, "cik"));
console.log('Bölme İşlemi Sonucu =  ', calc(6, 4, "böl"));
console.log('Çarpma İşlemi Sonucu =  ', calc(3, 7, "carp"));
console.log('İşlem Sonucu =  ', calc(10, 0, 'böl'));
console.log('İşlem Sonucu =  ', calc('10', 'ali', "topl"));
console.log('İşlem Sonucu =  ', calc('true', 20, "carp"));