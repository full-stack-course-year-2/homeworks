console.log('Calculatrice simple');



// bir adet function yaziniz. (numéro_1, numéro_2, islem) / fonction calculatrice écrite

function sonuc(numéro_1, numéro_2, islem){
    
// dönus degeri: object   / valeurs de retour définies en tant qu'objets. 
    var donusDegeri = {
        numéro_1: '',
        islem:'',
        numéro_2: '',
        sonuc: '',
        hata: '',
    }
    
//islem ve hata kontrolü yapiniz. / exécuter quatre opérations et vérification des erreurs
    if (isNaN(numéro_1) || isNaN(numéro_2)) {
            donusDegeri.hata = 'Lutfen sayı giriniz / Il y a une erreur';
            
    } else {
        
        switch (islem) {
            case 'topla':
                if (numéro_1 >=0 && numéro_2 >=0){
                    donusDegeri.sonuc=topla(numéro_1, numéro_2);
                    donusDegeri.hata = 'Hata Yok./ Pas d-erreur';
        
                } else {
                    donusDegeri.hata = '0dan kücük sayı girmeyiniz / Il y a une erreur';
                }

                break;
            case 'cikar':
                if (numéro_1 >=0 && numéro_2 >=0){
                    donusDegeri.sonuc=cikar(numéro_1, numéro_2);
                    donusDegeri.hata = 'Hata Yok./ Pas d-erreur';
        
                } else {
                    donusDegeri.hata = '0dan kücük sayı girmeyiniz / Il y a une erreur';
                }
            
                break;
            case 'carp':
                if (numéro_1 >=0 && numéro_2 >=0){
                    donusDegeri.sonuc=carp(numéro_1, numéro_2);
                    donusDegeri.hata = 'Hata Yok./ Pas d-erreur';
        
                } else {
                    donusDegeri.hata = '0dan kücük sayı girmeyiniz / Il y a une erreur';
                }
        
                break;
            case 'bol':
                if (numéro_1 >=0 && numéro_2 > 0){
                    donusDegeri.sonuc=bol(numéro_1, numéro_2);
                    donusDegeri.hata = 'Hata Yok./ Pas d-erreur';
        
                } else {
                    donusDegeri.hata = '0dan kücük sayı girmeyiniz veya ikinci sayısı 0 girmeyiniz / Il y a une erreur';
                }

                break;
            
            default:
                donusDegeri.hata = 'İşlem secme hatası / Il y a une erreur';
                break;
        }
    }

   donusDegeri.numéro_1 = numéro_1;
   donusDegeri.islem = islem;
   donusDegeri.numéro_2 = numéro_2;

    return donusDegeri;
}

// islem funtion oluştur / Création de quatre opérations et fonctions
//topla(); / La Somme
function topla(numéro_1, numéro_2){
    var sonuc;
    sonuc = numéro_1 + numéro_2;
    return sonuc;
}
//cikar(); 
function cikar(numéro_1, numéro_2){
    var sonuc;
    sonuc = numéro_1 - numéro_2;
    return sonuc;
}
//carp();
function carp(numéro_1, numéro_2){
    var sonuc;
    sonuc = numéro_1 * numéro_2;
    return sonuc;
}
//bol(); 
function bol(numéro_1, numéro_2){
    var sonuc;
    sonuc = numéro_1 / numéro_2;
    return sonuc;
}


// output property  sonuc hata

//
console.log(sonuc(10, 5, 'topla'));
console.log(sonuc(10, 5, 'topla122'));
console.log(sonuc(10, -5, 'topla'));
console.log(sonuc(10, 5, 'cikar'));
console.log(sonuc(10, -5, 'cikar'));
console.log(sonuc(10, 5, 'carp'));
console.log(sonuc(10, -5, 'carp'));
console.log(sonuc(10, 5, 'bol'));
console.log(sonuc(10, 0, 'bol'));
console.log(sonuc('qq', 5, 'bol'));



