// A function that uses the map method to square each number of an array.


var numbers = [1,2,3,4,5];

var results = numbers.map(function(eachNumber){
  return eachNumber * eachNumber;
});

console.log(results);
