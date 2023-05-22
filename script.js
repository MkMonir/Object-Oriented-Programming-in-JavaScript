// SECTION: ==================== Constructor functions & the new Operator ========================
const Person = function (firstName, birthYear) {
  // NOTE: Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // NOTE: NEVER DO THIS
  //   this.calcAge = function () {
  //     console.log(2023 - this.birthYear);
  //   };
};

const ashiq = new Person("Ashiq", 1992);

// NOTE:
// 1. Create new {} Object
// 2. Function is called, this = {}
// 3. {} is linked to prototype
// 4. Function automatically return Object

const tanvir = new Person("Tanvir", 1999);
// console.log(tanvir);

// SECTION: PROTOTYPES ===========================================================
Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

// tanvir.calcAge();
// ashiq.calcAge();

// NOTE:  In there Person.prototype is not the prototype of Person it is the prototype of all the objects created by Person constructor
// console.log(Person.prototype === ashiq.__proto__);
// console.log(Person.prototype.isPrototypeOf(tanvir));

Person.prototype.city = "Dhaka";

// console.log(ashiq.city, tanvir.city);

// console.log(ashiq.hasOwnProperty("city"));

// SECTION: PROTOTYPAL INHERITANCE on BUILT-IN OBJECTS ===========================================================
// console.log(ashiq.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [3, 6, 4, 6, 6, 9];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// console.log(document.querySelector("h1"));

// SECTION: CODING CHALLENGE #1 =================================================================
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;

  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);

bmw.accelerate();
mercedes.brake();
