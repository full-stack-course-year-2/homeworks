import {
    atan2, chain, e, evaluate, log, pi, round, sqrt
  } from 'mathjs'
  
  // functions and constants
 console.log(round(e, 3))                     // 2.718
 console.log(atan2(3, -3) / pi)              // 0.75
 console.log(log(10000, 10))                 // 4
 console.log(sqrt(-4))                       // 2i
 
  // expressions
console.log( evaluate('12 / (2.3 + 0.7)'))   // 4
console.log( evaluate('sin(45 deg) ^ 2'))    // 0.5
console.log(evaluate('9 / 3 + 2i'))       // 3 + 2i
console.log( evaluate('det([-1, 2; 3, 1])')) // -7
  
  // chaining
let result = chain(3).add(4).multiply(2).done();  // 14
console.log(result);