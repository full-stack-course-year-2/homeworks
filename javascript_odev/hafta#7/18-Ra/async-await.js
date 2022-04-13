// Problem: create random numbers between 1 and 100000000
// store them in an array and sort them
// await async function to find the biggest and smallest number

function sortRandomNumbers(min, max, count) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {

  var randomNumbers = [];
  for (var i = 0; i < count; i++) {randomNumbers.push(Math.floor(Math.random() * (max - min + 1) + min));}
  randomNumbers.sort(function (a, b) {return a - b;  });
   resolve(randomNumbers);
    }, 0);
  });
}

console.log("Program started");

function printer(randomNumbers) {
  console.log(randomNumbers);
  console.log("Largest number: " + randomNumbers[randomNumbers.length - 1]);
  console.log("Smallest number: " + randomNumbers[0]);
}

async function programStart() {
  var randomNumbers = await sortRandomNumbers(1, 100000000, 10000000).then(function (randomNumbers) {
    return randomNumbers;
  });
  printer(randomNumbers);
}


programStart().then(function () {
  console.log("Program ended");
});
