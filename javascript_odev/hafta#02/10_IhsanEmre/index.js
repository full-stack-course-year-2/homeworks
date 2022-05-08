// Calculator in Js
function calculator(sayi_1,sayi_2,islem)
{   
    //Code here
    var cikti ={sonuc: 0.00,hata: "yok"};

    if(islem == "+")
    {
        cikti.sonuc = sayi_1 + sayi_2
        cikti.hata = "Yok"
    }
    else if(islem == "-")
    {   
        cikti.sonuc = sayi_1 - sayi_2
        cikti.hata = "Yok"
    }
    else if(islem == "*")
    {   
        cikti.sonuc = sayi_1 * sayi_2
        cikti.hata = "Yok"
    }    
    else if(islem == "/")
    {   
        cikti.sonuc = sayi_1 / sayi_2 
        cikti.hata = "Yok"
    }    
    else
    {   
        cikti.sonuc = 0.00
        cikti.hata = "gecersiz degerler"
    }
    return cikti; 
}


// Calling function
var output = calculator(2,3,'+')
console.log(output)

var output = calculator(10,8,"-")
console.log(output)

var output = calculator(4,3,"*")
console.log(output)

var output = calculator(10,8,"/")
console.log(output)

// invalid values
var output = calculator(10,7,"r")
console.log(output)
var output = calculator("a","b","z")
console.log(output)
