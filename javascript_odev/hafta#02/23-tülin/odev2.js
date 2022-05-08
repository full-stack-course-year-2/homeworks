function hesapmakinesi(a,b, islem)
{ 
    var hesapla = {
        sonuc:""
        };

    switch(islem) {

        case '*':
            hesapla.sonuc = a*b;
            break;

        case '/':
            if (a== 0 && b == '0'){
                console.error("Sonuc Tanimsiz");
                hesapla.sonuc = "Sonuc Tanimsiz";
            } else if(b == '0'){
                console.error("Sonuc Tanimsiz");
                hesapla.sonuc = "Sonuc Tanimsiz";
            } else {
                hesapla.sonuc =a/b;
            }
            break;

        case '+':
            hesapla.sonuc = a+b;  
            break;
            
        case '-':
            hesapla.sonuc = a-b;
            break;    

        default:
            console.log("gecersiz islem"); 
            break;   

    }
    
    console.log(a + islem + b + " =" + hesapla.sonuc);
    
    return hesapla;
}

console.log(hesapmakinesi(10,2,'*'));
console.log(hesapmakinesi(10,0,'/'));
console.log(hesapmakinesi(10,2,'/'));
console.log(hesapmakinesi(10,2,'+'));
console.log(hesapmakinesi(10,2,'-'));