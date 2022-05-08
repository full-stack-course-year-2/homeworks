console.log('Hesap Makinesi');

function hesapla(sayi_1, islem, sayi_2){
 
    var degerlendirme = {
        sayi_1:'',
        islem:'',
        sayi_2:'',
        sonuc:'',
        hata: '',
    }
    
        switch (islem) {

            case '+':
                degerlendirme.sonuc = sayi_1 + sayi_2;
                degerlendirme.hata = 'Hata yok';
                break;
    
            case '-':
                degerlendirme.sonuc = sayi_1 - sayi_2;
                degerlendirme.hata = 'Hata yok';
                break;
    
            case '*':
                degerlendirme.sonuc = sayi_1 * sayi_2;
                degerlendirme.hata = 'Hata yok';
                break;
    
            case '/':
                degerlendirme.sonuc = sayi_1 / sayi_2;
                degerlendirme.hata = 'Hata yok';
                if (sayi_2 == 0 ) {
                    degerlendirme.hata= "İkinci sayı 0 olamaz!!!";
                }
                break;
    
            default:
                degerlendirme.hata= "'" + islem + "' Tanimli bir islem degil";
                break;
        
            }
        degerlendirme.sayi_1 = sayi_1;
        degerlendirme.islem = islem;
        degerlendirme.sayi_2 = sayi_2;
        
        if(typeof(sayi_1) !== 'number'|| typeof(sayi_2) !== 'number'){
            degerlendirme.hata = 'Girdiginiz deger hatali. Bir sayi degeri giriniz';
        } 
        return degerlendirme;
}
console.log(hesapla(80, '+', 5))
console.log(hesapla(80, '-', 5))
console.log(hesapla(80, '/', 5))
console.log(hesapla(80, '*', 5))
console.log(hesapla(80, '/', 0))
console.log(hesapla(80, '//', 5))
console.log(hesapla('aa', '+', 5))
console.log(hesapla(80, '-', 'bb'))