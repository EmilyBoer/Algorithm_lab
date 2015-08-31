// Take a string of characters and determine how often each letter appears

// learning competencies

// pseudo code
// input = String
// output = string and number pairs

// make sure you're taking a string


var characterFrequency = function(str){
  var letters = {}
  if (typeof str === "str"){
    for (var i= 0; str.length > i; i++ ){
      if (letters [str[i]]){
        letters [str[i]] +=1;
      } else {
        letters[str[i]] = 1;
      }
    }
  }
};


console.log(characterFrequency("hello"));