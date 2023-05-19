const Person = function (firstName, birthYear) {
  // NOTE: Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const ashiq = new Person("Ashiq", 1992);
console.log(ashiq);

// NOTE:
// 1. Create new {} Object
// 2. Function is called, this = {}
// 3. {} is linked to prototype
// 4. Function automatically return Object

const tanvir = new Person("Tanvir", 1999);
console.log(tanvir);
