// calculator app

function typecontrol(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return true;
  } else {
    return false;
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return { result: null, error: 'Cannot divide by zero' };
  }
  else {
    return { result: a / b, error: null };
  }
}

function calculate(a, b, operator) {
  rst = { result: null, error: null };

  if (typecontrol(a, b) === true) {
    if (operator === '+') {
      rst.result = add(a, b);
    } else if (operator === '-') {
      rst.result = subtract(a, b);
    } else if (operator === '*') {
      rst.result = multiply(a, b);
    } else if (operator === '/') {
      rst = divide(a, b);
    } else {
      rst.error = 'Invalid operator';
    }
  } else {
    rst.error = 'Invalid input';
  }
  return rst;
}


// example of how to sum two numbers
console.log(calculate(1, 2, '+'));
// expected output: 3
// example of how to subtract two numbers
console.log(calculate(1, 2, '-'));
// expected output: -1
// example of how to multiply two numbers
console.log(calculate(1, 2, '*'));
// expected output: 2
// example of how to divide two numbers
console.log(calculate(1, 2, '/'));
// expected output: 0.5


// Example of Errors
// example of how to divide by zero :)
// expected output: { result: null, error: 'Cannot divide by zero' }
console.log(calculate(1, 0, '/'));

console.log(calculate(1, 2, '%'));
// expected output: { result: null, error: 'Invalid operator' }

console.log(calculate('a', {}, '+'))
// expected output: { result: null, error: 'Invalid input' }



