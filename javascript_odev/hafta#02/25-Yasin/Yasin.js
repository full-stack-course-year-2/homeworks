var islemSonucu = {
    hata_1 : '0 a bolunmez',
    hata_2 : 'deger giriniz',
}



function topla(sayi_1, sayi_2){
    var result =sayi_1 + sayi_2;
    

    if (sayi_1 >= 0 || sayi_1<=0 && sayi_2>= 0 || sayi_2<=0 && sayi_1 != null && sayi_2 != null ){

        var toplamaSonuc = topla( );

    }else{
        result =islemSonucu.hata_2
    }

    return result;
     
}

function cikar(sayi_1, sayi_2){
    var result =sayi_1 - sayi_2;

    if (sayi_1 >= 0 || sayi_1<=0 && sayi_2>= 0 || sayi_2<=0 && sayi_1 != null && sayi_2 != null){
        var cikarmaSonuc = cikar( );

    }else{
        result = islemSonucu.hata_2
    }

    return result;
}


function carp(sayi_1, sayi_2){
    var result =sayi_1 * sayi_2;

    if (sayi_1 >= 0 || sayi_1<=0 && sayi_2>= 0 || sayi_2<=0 && sayi_1 != null && sayi_2 != null){
        var carpmaSonuc = carp();

    }else{
        result = islemSonucu.hata_2
    }

    return result;
}

function bol(sayi_1, sayi_2){
    var result =sayi_1 / sayi_2;

    if (sayi_2 != 0 && sayi_1 >= 0 || sayi_1<=0 && sayi_2 > 0 || sayi_2 < 0 ){
        var bolmeSonuc = bol();

    }else{
        result = islemSonucu.hata_1 
    }

    if (sayi_1 == null && sayi_2 == null){
      
        result = islemSonucu.hata_2
    }else {
        bolmeSonuc = bol();
    }
    return result;
}



toplamaSonuc = topla(0, 2);
console.log(toplamaSonuc);

cikarmaSonuc = cikar(-3 , 1);
console.log(cikarmaSonuc);

carpmaSonuc = carp(2 , -4);
console.log(carpmaSonuc);

bolmeSonuc = bol(2 ,0);
console.log(bolmeSonuc);


