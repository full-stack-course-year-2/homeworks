
function hesapla(a, islem, b){

    var result= {
        a:'',
        islem:'',
        b:'',
        hata: '',
        sonuc:'',
    }
    
        result.a = a;
        result.islem = islem;
        result.b = b;

       if(a+b){
           result.sonuc=a+b;
           result.hata='hata yok'
       } else
       if(a-b){
        result.sonuc=a-b;
        result.hata='hata yok'
       } else
       if(a *b){
        result.sonuc=a-b;
        result.hata='hata yok'
       }


        if(typeof(a) !== 'number'|| typeof(b) !== 'number'){
            result.hata = 'sayi degeri gereklı';
        }
       
                  
        if(b ==0 && islem == "/" ){
            result.hata="ıkıncı sayı 0 olamaz";
            sonuc='sonsuz'
        }
        return  result;
}

       console.log(hesapla(10,'+',5))
       console.log(hesapla(10,'-',5))
       console.log(hesapla(10,'*',5))
       console.log(hesapla(10,'/',0))
       console.log(hesapla('alı','islem','velı'))