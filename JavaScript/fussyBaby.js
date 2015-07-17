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




var parkRides = [["birch bumpers", 40], ["pines plunge", 45], ['cedar coaster', 20], ['ferris wheel of firs', 90]]

var fastPassQueque = ["cedar coaster", "pines plunge", "cedar coaster" ]

var yourChoice = "cedar coaster"


function ticketbuilder(allrides, fastpass, pick){
  if (pick == fastpass[0]){
    var pass = fastpass.shift();
    return function() {
      alert("quick, you have a fast pass to" + pass);
    }
  }
};