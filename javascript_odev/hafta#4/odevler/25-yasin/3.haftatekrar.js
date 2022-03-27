function calc(sayi_1, sayi_2, islem){
    var result = {
         sonuc : 0,
         hata : ""
    }
 
 
    /* HATA KONTROLLERI:
     1- Sayi yerine srting bir deger girilmis mi?  -->   console.log ('toplama', calc(iki, uc, '+')) gibi
     2- Bolme isleminda 2. sayi 0 olmamali
     3- +, -, *, / islemleri disinda calismamali   (bos dahi olursa calismaz)
 
     if ('1. hata') {                            mantiksal olarak hata bu sekilde yazilir. Yani;
                                                 eger 1. hata olursa bunu yap, yoksa 2. hataya bak, yoksa 3'e bak, yoksa switch case icerisine bak diyoruz.     
     } else if('2. hata'){
 
     }else is (3. hata){
 
     }else{
         switch (islem){
             case'+'
         }
     }
 
 
 
     3.HATAYI CALISTIRMA METODU:
 
     Bu hatada 4 (+,-,*,/) islemden farkli baska bir parametre alirsa hata vermesini istiyoruz. Bunun icin bir array tanimlariz.
 
     browserimizda denemek uzere:
     Bir degisken tanimlariz,
     var arr = ['+', '-', '*', '/']
     
     ['+', '-', '*', '/'].indexOf('+')         --> 0 (index numarasini verir.)
     ['+', '-', '*', '/'].indexOf('-')         --> 1 (index numarasini verir.)
     ['+', '-', '*', '/'].indexOf('*')         --> 2 (index numarasini verir.)
     ['+', '-', '*', '/'].indexOf('/')         --> 3 (index numarasini verir.)
     ['+', '-', '*', '/'].indexOf('ascasv      --> -1 (index numarasini verir.)
 
     bu sebeple yukardaki array disinda olmayan bir sey yazdigimizda index'ini -1 verecegi icin;
     3. hataya,
     else if ( ['+', '-', '*', '/'].indexOf('islem')) == -1 ise console.log da bir hatanin yazmasini isteyecegiz.
 
 
    */
     
 
     //1- Sayi yerine srting bir deger girilmis mi?
     if (typeof sayi_1 !== 'number' || typeof sayi_2 !== 'number') {     // browserdan sayi1 ve sayi2 nin typeof unu kontrol ettigimizde 'number' yazmaktadir                         
          result.hata = 'Lutfen sayi giriniz.'                           // yani typeof u 'number' disinda bir degerse 'string' gibi yandaki hatayi bize verecek.
 
 
     } else if(islem == '/' && sayi_2 == 0) {
         result.hata = 'Bolme isleminde ikinci sayi 0 olamaz.'
 
 
     }else if (['+', '-', '*', '/'].indexOf(islem) == -1 ) {
         result.hata = 'Hatali islem operatoru.'
 
     } else {
 
     switch (islem) {             //key = islem olarak tanimladik (yani kontrol etmke istedigimiz parametreyi yada degeri yaziyoruz. yani if() icerisinde kontrol etmek istegimiz parametreyi yaziyoryuz)
         case '+':                   //yukarida yazdigimiz objede islem parametresini console.log('+') sitring olarak tanimladigimi icin bizde strig bir deger yaziyoruz.
             result.sonuc = sayi_1 + sayi_2;
             break;
             case '-':               // '-' yazdigimiz deger matematiksel bir islemi degil, console.log da islem parametresini calistirmak icin belitiyoruz.
             result.sonuc = sayi_1 - sayi_2;
             break;
             case '*':               // console.log(calc(5,2, '*')) yerine  'carp' yazarak --> (5, 2, 'carp') seklinde carpma islemi calistiririz.
             result.sonuc = sayi_1 * sayi_2;
             break;
             case '/':
             result.sonuc = sayi_1 / sayi_2;
             break;
 
         default:
             result.sonuc = 0;       // yukardaki case lerdeki islemlerden hicbirine uymayan bir durum varsa default deger tanimlanir.
             result.hata = 'Hatali islem operatoru'          // yukaridaki islem lerden farkli bi deger yazarsak bunu gostericek
             break;
         }
     }
 
 return result; // sadece result yazmamizin sebebi; result degiskeni bir obje oldugu icin tum propertilerini (sonuc ve hata) gostermek 
                // icin yaziyoruz. Orn. result.sonuc deseydik sonuc 5 olarak yazacakti.
 
 
 }
 
 console.log ('toplama', calc(2, 3, '+')); // yukarda fonk 3 parametre tanimladigimiz icin sayi1= 2 sayi2=3 islem='+'
 console.log ('toplama', calc(4, 6, '-'));
 console.log ('toplama', calc(5, 3, '*'));
 console.log ('toplama', calc(10, 3, '/'));
 
 //HATALARI CALISTIRMAK ICIN;
 console.log ('toplama', calc(2, '25', '*'));            // 1. Hata
 console.log ('toplama', calc(2, 0, '/'));               // 2. Hata
 console.log ('toplama', calc(2, 0, 'cikar'));           // 3. Hata
 
 
 
 
 
 // IF ELSE OLARAK YAPMAK ISTERSEK;
 
 /*
 
 function calc(sayi_1, sayi_2, islem){               once bir fonks olusturulur.
     var result = {                                  daha sonra bu fonks icerisine bir obje tanimlanir ve icerisine yapmak istedigimiz propertiler yazilir.
          sonuc : 0,                                 yapacagimiz islemleri sonuc icerisinde yazariz ve default deger olarak 0 verilir.
          hata : ""                                  sonradan tanimlayacagimiz hatalar icinde  "" bos olarak yazilir. 
     }
 
     if (islem == '+'){                              '+' isareti yapilacak islemi temsil ediyor herhangi bir fonksiyonu yok. console de yapilacak islemi cagirmak icin ve yukardaki objedeki islem == '+' diyerek parametreye deger tanimlamis oluyoruz. 
         result.sonuc = sayi_1 + sayi_2;             asil islemi sayi_1 + sayi_2 yazarak matematiksel islem yapiyoruz.
     }
 
     if (islem == '-'){
         result.sonuc = sayi_1 - sayi_2;
     }
 
      if (islem == '*'){
         result.sonuc = sayi_1 * sayi_2;
     }
     if (islem == '/'){
         result.sonuc = sayi_1 / sayi_2;
     }
 
 
 
 
 
 return result               eger result.sonuc dersek bize toplama isleminde bize sadece bize rakamsal sonucu dondericek
                             ama biz komple objeyi gostermek istedigimiz icin result sonuc yaziyoruz.  console.log(calc(5, 2, "+") )
 }*/ 
 
 // console.log(calc(5, 2, "+") )    yada console de yapilan islemi tanimlamak icin '' icerisine yazi ile belirtebiriz;
 //yani;   console.log('toplama' calc(5, 2, "+") )   'toplama' olarak yapacagimiz islemi belirtebiliriz.
 
 /*diger islemleride yazamak istersek;
 console.log('cikarma' calc(5, 2, "-") )
 console.log('carpma' calc(5, 2, "*") )
 console.log('bolme' calc(5, 2, "/") )
 */
 
 
 
 
 
 /* ************KOD OKUNULABIRLIGINI ARTIRMAK ICIN;********************
 
 hata oldugunu anlamamiz ve kod okunulabilrligini artirmak icin if else yapisini degil sadece if ile hata kontrolu yapilir. 
 her if in icerisine return yailarak baska bir kullanicinin burada bir hata kontrolu yaptigini anlamasina yardimci oluruz.
 yukaridaki islemde tamamen ayni. mantiken bir sikinti yok. Ancak Yukardakini debuk ettigimizde her if else yapisini kontrol ediyor ve sonra return 
 geciyor. asagida yazdigimiz da ise; herhangi bir hatayla karsilasirsa diger islemleri gormeden sonucu yazdiriyor.
 
 
 
 */
 if (typeof sayi_1 !== 'number' || typeof sayi_2 !== 'number') {     
     result.hata = 'Lutfen sayi giriniz.'   
     return result;                                  // hata kontrolu yapildigini anlariz
 } 
 
 if(islem == '/' && sayi_2 == 0) {
     result.hata = 'Bolme isleminde ikinci sayi 0 olamaz.'
     return result;                                  // hata kontrolu yapildigini anlariz
 }
 
 if (['+', '-', '*', '/'].indexOf(islem) == -1 ) {
     result.hata = 'Hatali islem operatoru.'
     return result;                                  // hata kontrolu yapildigini anlariz switch case yazarken if in sonuna else yazmiyoruz.
 }
 
 switch (islem) {             //key = islem olarak tanimladik (yani kontrol etmke istedigimiz parametreyi yada degeri yaziyoruz. yani if() icerisinde kontrol etmek istegimiz parametreyi yaziyoryuz)
     case '+':                   //yukarida yazdigimiz objede islem parametresini console.log('+') sitring olarak tanimladigimi icin bizde strig bir deger yaziyoruz.
         result.sonuc = sayi_1 + sayi_2;
         break;
         case '-':               // '-' yazdigimiz deger matematiksel bir islemi degil, console.log da islem parametresini calistirmak icin belitiyoruz.
         result.sonuc = sayi_1 - sayi_2;
         break;
         case '*':               // console.log(calc(5,2, '*')) yerine  'carp' yazarak --> (5, 2, 'carp') seklinde carpma islemi calistiririz.
         result.sonuc = sayi_1 * sayi_2;
         break;
         case '/':
         result.sonuc = sayi_1 / sayi_2;
         break;
 
     default:
         result.sonuc = 0;       // yukardaki case lerdeki islemlerden hicbirine uymayan bir durum varsa default deger tanimlanir.
         result.hata = 'Hatali islem operatoru'          // yukaridaki islem lerden farkli bi deger yazarsak bunu gostericek
         break;
     }