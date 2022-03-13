console.log('Calculatrice simple');

// bir adet function yaziniz. (number_1, number_2, process) / fonction calculatrice écrite

function conclusion(number_1, number_2, process){
    //var conclusion;
// dönus degeri: object   / valeurs de retour définies en tant qu'objets. 
    var returnValue = {
        number_1: '',
        process:'',
        number_2: '',
        conclusion: '',
        eror: '',
    }
    
//process ve eror kontrolü yapiniz. / exécuter quatre opérations et vérification des erreurs

    if (isNaN(number_1) || isNaN(number_2)) {
            returnValue.eror = 'Please enter number';
            
    } else {
        
        switch (process) {
            case 'topla':
                    returnValue.conclusion = topla(number_1, number_2);
                    returnValue.eror = 'No Eror';

                break;

            case 'cikar':
                    returnValue.conclusion = cikar(number_1, number_2);
                    returnValue.eror = 'No Eror';

                break;

            case 'carp':
                    returnValue.conclusion = carp(number_1, number_2);
                    returnValue.eror = 'No Eror';
        
                break;

            case 'bol':
                if (number_2 == 0){
                    returnValue.conclusion = bol(number_1, number_2);
                    returnValue.eror = 'No Eror';
        
                } else {
                    returnValue.eror = 'cannot be divided by zero';
                }

                break;
            
            default:
                returnValue.eror = 'Transaction selection error ';
                break;
        }
    }

   returnValue.number_1 = number_1;
   returnValue.process = process;
   returnValue.number_2 = number_2;

   return returnValue;
}

// process funtion oluştur / Création de quatre opérations et fonctions
//topla(); / La Somme
function topla(number_1, number_2){
    var conclusion;
    conclusion = number_1 + number_2;
    return conclusion;
}

//cikar(); 
function cikar(number_1, number_2){
    var conclusion;
    conclusion = number_1 - number_2;
    return conclusion;
}

//carp();
function carp(number_1, number_2){
    var conclusion;
    conclusion = number_1 * number_2;
    return conclusion;
}

//bol(); 
function bol(number_1, number_2){
    var conclusion;
    conclusion = number_1 / number_2;
    return conclusion;
}


// output property  conclusion eror
console.log(conclusion(10, 5, 'topla'));
console.log(conclusion(10, 5, 'topla122'));
console.log(conclusion(10, -5, 'topla'));
console.log(conclusion(10, 5, 'cikar'));
console.log(conclusion(10, -5, 'cikar'));
console.log(conclusion(10, 5, 'carp'));
console.log(conclusion(10, -5, 'carp'));
console.log(conclusion(10, 5, 'bol'));
console.log(conclusion(10, 0, 'bol'));
console.log(conclusion('qq', 5, 'bol'));



