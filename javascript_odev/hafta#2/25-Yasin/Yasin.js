var islemSonucu = {
    hata: '0 a bolunmez'
}



function topla(sayi_1, sayi_2){
    var result =sayi_1 + sayi_2;
    

    if (sayi_1 >= 0 && sayi_2>= 0 && sayi_1 != undefined && sayi_2 != undefined){

        var toplamaSonuc = topla( );

    }else{
        result = false
    }

    return result;
     
}

function cikar(sayi_1, sayi_2){
    var result =sayi_1 - sayi_2;

    if (sayi_1 >= sayi_2 && sayi_1 != undefined && sayi_2 != undefined){
        var cikarmaSonuc = cikar( );

    }else{
        result = false
    }

    return result;
}


function carp(sayi_1, sayi_2){
    var result =sayi_1 * sayi_2;

    if (sayi_1 >= 0 && sayi_2>= 0 && sayi_1 != undefined && sayi_2 != undefined){
        var carpmaSonuc = carp();

    }else{
        result = false
    }

    return result;
}

function bol(sayi_1, sayi_2){
    var result =sayi_1 / sayi_2;

    if (sayi_1 >= 0 && sayi_2 > 0 && sayi_1 != undefined && sayi_2 != undefined){
        var bolmeSonuc = bol();

    }else{
        result = islemSonucu.hata
    }

    return result;
}



toplamaSonuc = topla(2, 2);
console.log(toplamaSonuc);

cikarmaSonuc = cikar(2 , 1);
console.log(cikarmaSonuc);

carpmaSonuc = carp(2 , 5);
console.log(carpmaSonuc);

bolmeSonuc = bol(2, 0);
console.log(bolmeSonuc);


