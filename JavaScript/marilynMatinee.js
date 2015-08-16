// A different Marilyn Monroe movie plays at noon every day. Plug in your Marilyn Monroe movie of choice to see if it's playing today.

// learning competencies
// function expressions
// array methods
// calling functions
//breaking a larger problem down into smaller steps

function movie (allMovies, yourPick){
if (allMovies[0] == yourPick){
  var todaysMarilyn = allMovies.shift();
  return function(){
    alert("todaysMarilyn is today's matinee!");
  };

} else {
return function(){
  alert("Sorry, "+ allMovies[0] + "is playing today. Try again tomorrow." );
}
}

var marilynMovies = ["Some Like it Hot", "The Seven Year Itch", "Gentlemen Prefer Blondes", "The Misfits", "Bus Stop", "Niagra", "All About Eve" ]

var yourChoice = "Some Like it Hot";


var ticket = movie(marilynMovies, yourChoice);
ticket();



