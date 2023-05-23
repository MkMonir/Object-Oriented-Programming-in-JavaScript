'use strict';

// SECTION: ==================== Constructor functions & the new Operator ========================
// const Person = function (firstName, birthYear) {
//   // NOTE: Instance Properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // NOTE: NEVER Create Methods inside Constructor Functions. Instead create it in prototype
//   //   this.calcAge = function () {
//   //     console.log(2023 - this.birthYear);
//   //   };
// };

// const ashiq = new Person("Ashiq", 1992);

// NOTE:
// 1. Create new {} Object
// 2. Function is called, this = {}
// 3. {} is linked to prototype
// 4. Function automatically return Object

// const tanvir = new Person("Tanvir", 1999);
// console.log(tanvir);

// SECTION: PROTOTYPES ===========================================================
// Person.prototype.calcAge = function () {
//   console.log(2023 - this.birthYear);
// };

// tanvir.calcAge();
// ashiq.calcAge();

// NOTE:  In there Person.prototype is not the prototype of Person it is the prototype of all the objects created by Person constructor
// console.log(Person.prototype === ashiq.__proto__);
// console.log(Person.prototype.isPrototypeOf(tanvir));

// Person.prototype.city = "Dhaka";

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
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// const bmw = new Car("BMW", 120);
// const mercedes = new Car("Mercedes", 95);

// bmw.accelerate();
// mercedes.brake();

// SECTION: ES6 CLASSES=================================================
// 1. NOTE: Classes are not hoisted
// 2. NOTE: Class are first-class citizens
// 3. NOTE: Classes are executed in strict mode

// class Expression
// const PersonCL = class {};

// class Declaration
// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   // Methods will be added to .prototype property automatically
//   calcAge() {
//     console.log(2023 - this.birthYear);
//   }
// }

// const kuddus = new PersonCl("Kuddus", 1990);
// kuddus.calcAge();

// SECTION: Setters & getters =================================================
// Regular Object
const account = {
  owner: 'Abdul Ali',
  movements: [200, 150, 350, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(value) {
    this.movements.push(value);
  },
};

// console.log(account.latest);

// account.latest = 250;

// Class
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property automatically
  calcAge() {
    console.log(2023 - this.birthYear);
  }

  static hey() {
    console.log('Hey there👋');
  }

  get age() {
    return 2023 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a valid full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

const kuddus = new PersonCl('Kuddus Ali', 1990);
// console.log(kuddus.age);

// SECTION: Static Methods================================================

const PersonStatic = class {
  constructor(fullName) {
    this.fullName = fullName;
  }
};

PersonStatic.greet = function () {
  console.log('first');
};

const personGreet = new PersonStatic('Kuddus Ali');
PersonStatic.greet();

// SECTION: Object.create ================================================
// const PersonProto = {
//   calcAge() {
//     console.log(2023 - this.birthYear);
//   },
// };

// const moqbul = Object.create(PersonProto);
// moqbul.birthYear = 2000;
// moqbul.calcAge();

// console.log(moqbul.__proto__ === PersonProto);

// SECTION: Challenge #2 =============================================

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   brake() {
//     this.speed -= 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   get speedUs() {
//     return this.speed / 1.6;
//   }

//   set speedUs(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new Car("Ford", 120);
// console.log(ford.speedUs);
// ford.accelerate();
// ford.accelerate();
// ford.brake();

// ford.speedUs = 50;
// ford.accelerate();
// ford.brake();

// SECTION: INHERITANCE BETWEEN CLASSES CONSTRUCTOR FUNCTIONS====================================

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// NOTE: LINKING PROTOTYPES
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I am study at ${this.course}`);
};

const ashiq = new Student('Ashiq', 1992, 'Computer Science');
// ashiq.introduce();
// ashiq.calcAge();

// console.log(ashiq);

// SECTION: CODING CHALLENGE ===================================================
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

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;

  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge ${this.charge}%`
  );
};

const tesla = new EV('Tesla', 120, 23);

// tesla.chargeBattery(30);
// tesla.accelerate();
// tesla.brake();
// tesla.accelerate();
// tesla.accelerate();

// SECTION: Inheritance between classes ES6 Classes========================================

class StudenCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // NOTE: ALWAYES NEED TO be HAPPEN FIRST
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study in ${this.course}`);
  }

  calcAge() {
    console.log(`I am ${2023 - this.birthYear} years old`);
  }
}

const mushi = new StudenCl('Mushfiqur Rahim', 1990, 'Computer Science');
// mushi.introduce();
// mushi.calcAge();

// SECTION: Inheritance between classes Object.create======================================
const PersonProto = {
  calcAge() {
    console.log(2023 - this.birthYear);
  },
};

const moqbul = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

const abbas = Object.create(StudentProto);

// console.log(abbas);

// SECTION: ANOTHER CLASS EXAMPLE =====================================================
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected Fields --------------------------------
    this._pin = pin;
    this._movements = [];
    this.locale = navigator.language;
  }

  deposit(val) {
    this._movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved!`);
    }
  }

  getMovements() {
    return this._movements;
  }
}

const acc1 = new Account('Ashiq', 'BDT', 1111);

acc1.deposit(1000);
acc1.withdraw(300);

acc1.requestLoan(3000);

console.log(acc1.getMovements());

console.log(acc1);
