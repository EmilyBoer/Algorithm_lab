
//What is obtained when the result of passing 9 into the fourth function of the functionjumble array is then passed into the function whose array index matches the result of passing 3 into the second function of the functionjumble array? Solve in one line with an alert message.

learning compentencies
//functions inside arrays


var functionjumble = [
  function(a) { return 8 * a - 10; },
  function(a) { return (a - 3) * (a - 3) * (a - 3); },
  function(a) { return a * a + 4; },
  function(a) { return a % 5; }
];

alert(functionjumble[functionjumble[2](3)](functionjumble[3](9)));
