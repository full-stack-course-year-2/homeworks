function calculator(sayi_1,sayı_2, operation)
{ 
    var calculate = {
        result:""
        };

    switch(operation) {

        case '*':
            calculate.result = sayi_1*sayı_2;
            break;

        case '/':
            if (sayi_1== 0 && sayı_2 == '0'){
                console.error("undefined");
                calculate.result = "undefined";
            } else if(sayı_2 == '0'){
                console.error("undefined");
                calculate.result = "undefined";
            } else {
                calculate.result =sayi_1/sayı_2;
            }
            break;

        case '+':
            calculate.result = sayi_1+sayı_2;  
            break;

        case '-':
            calculate.result = sayi_1-sayı_2;
            break;    

        default:
            console.log("invalid"); 
            break;   

    }

    console.log(sayi_1 + operation + sayı_2 + " =" + calculate.result);

    return calculate;
}

console.log(calculator(7,3,'*'));
console.log(calculator(7,0,'/'));
console.log(calculator(7,3,'/'));
console.log(calculator(7,3,'+'));
console.log(calculator(7,3,'-')); 