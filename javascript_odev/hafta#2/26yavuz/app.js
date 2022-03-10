function dortIslem(s_1, s_2, islem)
{
    var islemsonuc = {};
    islemsonuc = { sonuc:"bos", hata:"yok" };

    if ( islem == '/') {
        if (s_2 == '0'){
            islemsonuc.hata = "Sifira bolme hatasi";
        }
        else {
            islemsonuc.sonuc = s_1 / s_2;
        }
    } 
    if ( islem == '*') {
        islemsonuc.sonuc = s_1 * s_2;
    }
    if ( islem == '-') {
        if (s_1 < s_2  ){
            islemsonuc.hata = "ilk sayi büyük olmali";
        }
        else {
            islemsonuc.sonuc = s_1 - s_2;
        }
    } 
    if (islem == "+") {
        islemsonuc.sonuc = s_1 + s_2;

    }
    
    return islemsonuc;
}

var ornekislem;
ornekislem = dortIslem(2,2,'*');
console.log("2x2=" + ornekislem.sonuc+ " " + "hata:" + ornekislem.hata);
console.log(ornekislem);
ornekislem = dortIslem(2,0,'/');
console.log("2/0="+ ornekislem.sonuc+ " " + "hata:" + ornekislem.hata);
console.log(ornekislem)
ornekislem = dortIslem(2,3,'-');
console.log("2-3="+ ornekislem.sonuc+ " " + "hata:" + ornekislem.hata);
console.log(ornekislem)
ornekislem = dortIslem(5,5,"+")
console.log(ornekislem)
