
//Create an object that includes a function that grabs characters from two key-value pairs within the object.

learning compentencies
//functions inside objects
// using charAt method
// building objects

var person1 = {
  lastName: "Smith",
  firstName: "Tom",
  getInitials: function () {
    return this.firstName.charAt(0) + this.lastName.charAt(0);
  }
};

console.log(person1.getInitals());