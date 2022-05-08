
//This function is a calculator and returns the result. It accepts
// 3  variables first and last one should be a number
// operator should be one of ['+', '-', '*', '/']
// If you enter invalid operator or string as a variable then it returns the error

function calculator(num1, operator, num2,) {

    //sum, division, subtraction, multiplication

    var result = {
        result,
        errType: any = [],
    }

    switch (operator) {

        case '+':
            result.result = Number(num1) + Number(num2);
            break;

        case '-':
            result.result = Number(num1) - Number(num2);
            break;

        case '*':
            result.result = Number(num1) * Number(num2);
            break;

        case '/':
            result.result = Number(num1) / Number(num2);
            break;

        default:
            result.errType.push("'" + operator + "' is an invalid operator");
            break;
    }


    if (num2 == 0 && operator == '/') {

        result.errType.push("Second number should not be 0");

    }

    if (typeof num1 !== 'number') {

        result.errType.push("First entered value '" + num1 + "' should be a number");

    }

    if (typeof num2 !== 'number') {

        result.errType.push("Second entered value '" + num2 + "' should be a number");

    }

    return result;

};

console.log(calculator(3,'*', 21));