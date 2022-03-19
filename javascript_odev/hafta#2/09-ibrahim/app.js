function calc(s1, s2, islem) {
    var result = {
        sonuc: 0, 
        hata: ""
    }

    // if(islem == "+"){
    //     result.sonuc = s1 + s2;
    // }

    // if(islem == "-"){
    //     result.sonuc = s1 - s2;
    // }

    // if(islem == "/"){
    //     result.sonuc = s1 / s2;
    // }

    // if(islem == "*"){
    //     result.sonuc = s1 * s2;
    // 

    if  (typeof s1 !== "number" || typeof s2 !== "number" ) {
     result.hata = "lütfen sayi giriniz."
     return result; 
    } 
    if (islem == "/" && s2 == 0) {
        result.hata = "Bölme isleminde ikinci sayi sifir olamaz."
         return result; 
    } 
    if (["+", "-", "/", "*"].indexOf(islem) == -1) {
        result.hata = "Hatali islem operatörü"
        return result; 
    } 

    switch (islem) {
        case "+":
            result.sonuc = s1 + s2;
            break;
        case "-":
            result.sonuc = s1 - s2;
            break;
        case "/":
                result.sonuc = s1 / s2;
            break;
        case "*":
            result.sonuc = s1 * s2;
            break;
        default:
            result.sonuc = 0;
            result.hata = "Hatali islem operatörü."
            break;
        }
        return result;
}

console.log("toplama", calc(5, 2, "+"));
console.log("cikarma", calc(5, 2, "-"));
console.log("bölme", calc(5, 2, "/"));
console.log("carpma", calc(5, 2, "*")); 

console.log("hata", calc(5, "25", "*"));
console.log("hata", calc(5, 0, "/"));
console.log("hata", calc(5, 2, "ja"));



