// Problem: create random numbers between 1 and 100000000
// store them in an array and sort them
// callback function to find the biggest and smallest number

function sortRandomNumbers(min, max, count, callback) {
  setTimeout(function () {
    var randomNumbers = [];
    for (var i = 0; i < count; i++) {
      randomNumbers.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    randomNumbers.sort(function (a, b) {
      return a - b;
    });
    callback(randomNumbers);
  }, 0);
}

sortRandomNumbers(1, 1000, 2000, function (randomNumbers) {
  console.log(randomNumbers);
  console.log("Largest number: " + randomNumbers[randomNumbers.length - 1]);
  console.log("Smallest number: " + randomNumbers[0]);
  // find the numbers that occur more than once, print with occurence count
  var occurences = {};
  for (var i = 0; i < randomNumbers.length; i++) {
    if (occurences[randomNumbers[i]]) {
      occurences[randomNumbers[i]]++;
    } else {
      occurences[randomNumbers[i]] = 1;
    }
  }
  for (var key in occurences) {
    if (occurences[key] > 7) {
      console.log(key + " occurs " + occurences[key] + " times");      
    }
  }

  


  
});

  

console.log("Program ended");
