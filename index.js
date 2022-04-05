/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/* ❗❗ NOTE: PLEASE USE INDIVIDUAL KEYS FOR YOUR CONSTRUCTOR PARAMETERS, NOT OBJECTS. THE TESTS WILL NOT PASS WITH OBJECTS. ❗❗  */

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + .eat() should recieve a string as a parameter and take some type of edible as an argument
        + When eating an edible, it should be pushed into the `stomach` array.
        + The `eat` method should have no effect if there are 10 items in the `stomach` array.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` array should be empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

Person.prototype.eat = function(edible) {
  if (this.stomach.length < 10) {
    this.stomach.push(edible);
  } else {
    console.log("That's too much food! I think you should go to the bathroom...");
  }
}

Person.prototype.poop = function() {
  this.stomach = [];
}

Person.prototype.toString = function() {
  return `${this.name}, ${this.age}`;
}

const randomPerson = new Person("Tyler",34);
const randomPerson2 = new Person("Evan",19);
const randomPerson3 = new Person("Christine", 27);

console.log(randomPerson.toString());
console.log(randomPerson2.toString());
console.log(randomPerson3.toString());

randomPerson.eat("steak");
randomPerson.eat("lobster");
randomPerson.eat("ice cream");

console.log(randomPerson.stomach);

randomPerson.poop();
console.log(randomPerson.stomach);

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method
      + should take 'gallons' as an parameter which will take number of gallons as an argument
      + should add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/
function Car(model, milesPerGallon) {
  this.tank = 0;
  this.odometer = 0;
  this.model = model;
  this.milesPerGallon = milesPerGallon;
}

Car.prototype.fill = function(gallons) {
  this.tank = this.tank + gallons
}

Car.prototype.start = function() {
  return `My ${this.model} currently has ${this.tank} gallons of gas in the tank and can go ${this.milesPerGallon} miles per gallon!`
}

const newCar = new Car("2015 Mazda RX8", 26);
const newCar2 = new Car("2008 Honda Civic", 38);
const newCar3 = new Car("2012 Hummer H3", 12);

console.log(newCar.start());
console.log(newCar2.start());
console.log(newCar3.start())
/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies also have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
    Person.call(this, name, age);
    this.favoriteToy = favoriteToy;
}
Baby.prototype = Object.create(Person.prototype);
Baby.prototype.play = function() {
  return `${this.name} is ${this.age} year(s) old and they are playing with ${this.favoriteToy}!`
}

const randomBaby = new Baby("Samantha", 1, "binki");
console.log(randomBaby.play());

/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. 
  2. 
  3. 
  4. 
*/


///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person, 
  Car,
  Baby
}
