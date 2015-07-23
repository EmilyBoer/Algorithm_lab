// Create two arrays, one nested. One holds all rides and thei wait times the other holds a queue for fastpasses. If your ride of choice is the next in the fastpass array, the function with alert you with a message to catch that ride, else, it will tell you your choice ride's wait time.


// //learning competencies
// function expressions
// conditional statements
// array methods
// calling functions
// annonymous functions


var parkRides = [["birch bumpers", 40], ["pines plunge", 45], ['cedar coaster', 20], ['ferris wheel of firs', 90]]

var fastPassQueque = ["cedar coaster", "pines plunge", "cedar coaster" ]

var yourChoice = "cedar coaster"

function buildTicket(allRides, passrides, pick){
  if (pick == passrides[0]){

    var pass = passrides.shift();

    return function() {
      console.log("quick! you just got a pass for " + pass);
    };
  } else {
    for (var ride = 0; ride < parkRides.length; ride ++){
      if (allRides[ride][0] == pick){
        return function(){
          console.log(" your ride's wait time is" + );
        };
      }
    }
  }
}

var ticket = buildTicket(parkRides,fastPassQueque, yourChoice);

console.log(ticket());




