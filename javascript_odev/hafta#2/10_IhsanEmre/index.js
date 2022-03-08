// Calculator in Js
function calculator(sayi_1,sayi_2,islem)
{   
    //Code here
    if(islem == "+")
    {
        return {sonuc: sayi_1 + sayi_2, hata: "Yok"};
    }
    else if(islem == "-")
    {
        return {sonuc: sayi_1 - sayi_2, hata: "Yok"};
    }
    else if(islem == "*")
    { 
        return {sonuc: sayi_1 * sayi_2, hata: "Yok"}; 
    }    
    else if(islem == "/")
    { 
        return {sonuc: sayi_1 / sayi_2, hata: "Yok"};
    }    
    else
    {
        return {sonuc:"yok",hata:"gecersiz degerler"};             
    }
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