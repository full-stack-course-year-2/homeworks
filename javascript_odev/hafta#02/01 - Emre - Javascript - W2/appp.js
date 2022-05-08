function hesapMakinesi(sayi_1,sayi_2,islem)
{   
    
    var son ={sonuc: 0,hata: "-"};

    if(islem == "+"){
    son.sonuc = sayi_1 + sayi_2
    son.hata = "-"
    }
    else if(islem == "-"){
    son.sonuc = sayi_1 - sayi_2
    son.hata = "-"
    }
    else if(islem == "*"){   
    son.sonuc = sayi_1 * sayi_2
    son.hata = "-"
    }    
    else if(islem == "/"){ 
    son.sonuc = sayi_1 / sayi_2 
    son.hata = "-"
    }    
    else{ 
    son.sonuc = 0
    son.hata = "-----"
    }
    return son; 
}
// ctrl-x geri alma tuşu !Unutma
var deneme = hesapMakinesi(1,2,'+')
console.log(deneme)


var deneme = hesapMakinesi(8,4,'-')
console.log(deneme)

var deneme = hesapMakinesi(10,2,'/')
console.log(deneme)

var deneme = hesapMakinesi(5,3,'*')
console.log(deneme)