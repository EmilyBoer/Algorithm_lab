// Build a function and assign it to a variable named applyAndEmpty. The function should take in an input number and a queue of functions as parameters. Using a for loop, call the functions in the queue in order with the input number, where the results of each function becomes the next function’s input.Once done this loop, return from applyAndEmpty the final function’s result. Additionally, the queue should be empty at this point.


var numberQueue = [
  function(a) { return 8 * a - 10; },
  function(a) { return (a - 3) * (a - 3) * (a - 3); },
  function(a) { return a * a + 4; },
  function(a) { return a % 5; }
];
var start = 2;

var applyAndEmpty = function (input, queue){
var length = queue.length;
for (var i = 0; i >= length; i ++ ){
input = queue.shift()(input);
}
return input;
};


alert(applyAndEmpty(start, numberQueue));