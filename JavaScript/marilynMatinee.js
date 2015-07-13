// A different Marilyn Monroe movie plays at noon every day. Plug in your Marilyn Monroe movie of choice to see if it's playing today.


var marilynMovies = ["Some Like it Hot", "The Seven Year Itch", "Gentlemen Prefer Blondes", "The Misfits", "Bus Stop", "Niagra", "All About Eve" ]

var yourChoice = "Some Like it Hot";

function movie (dailyMarilyn, yourChoice) {
if (dailyMarilyn[0] == yourChoice){
  var todaysMarilyn = marilynMovies.shift();
  return function ( ) { alert(yourChoice + "is today's matinee!");
};
} else {
return function() { alert("Sorry, "+ dailyMarilyn[0] + "is playing today. Try again tomorrow." );
}
}