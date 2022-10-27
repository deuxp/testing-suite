/* eslint-disable space-before-function-paren */
"use strict";
// **note: Arrow function won't work for the function constructors, since arrow
// functions do not have the same context for the 'this' keyword.

///////////////////////////
// Constructor Function //
/////////////////////////

const Person = function (firstName, birthYear) {
  // instance properties
  // available to all objects instantiated from this constructor function
  this.firstName = firstName;
  this.birthYear = birthYear;
};

// objects created from the constructor function
const me = new Person("Friedi", 1982);
const matilda = new Person("Matilda", 1979);
const jack = new Person("Jack", 1969);
console.log(me, matilda, jack);

console.log(me instanceof Person); // boolean operator:true

/**
 * 1. New {} is created
 * 2. function is called, 'this' = the 'new' {}
 * 3. {} is linked to prototype
 * 4. function automatically return {} from the beginning

 *  ** do not define the behaviours (methods) in the constructor functions
 *    this will have the methods carried around in every instance. to bulky.
 *    instead use Prototype inheriance
 * */

/////////////////
// Prototypes //
///////////////
/** Every function (constructors too) in JS has a property called "prototype".
 * all of the methods that are declared on constructors prototype will be
 * available to every instance of the parent constructor function */

console.log(Person.prototype);

// remember not to use arrow functions for OOP in JS. .as 'this' context will be not be read by the instance
// 'this' is set to the object that is calling the method
Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

// so you can have access to the function because of Prototypal inheritance, even though it is not declared in the object.
// Any object always has access to methods and properties from its Prototype.

// prototype.. not just the prototype property
console.log("\t", me.__proto__);
console.log(me.__proto__ === Person.prototype); // true
// a better name for the .prototype property would be .prototypeOfLinkedObjects

// console.log(Person.prototype.isPrototypeOf(me)); // true
// console.log(Person.prototype.isPrototypeOf(Person)); // false

me.calcAge();
matilda.calcAge();
jack.calcAge();

// you can add a property to inherit.. not just methods
// the following is not actually in the object.. it just has access to it
// because it is in the prototype property of its constructor function: Person

Person.prototype.species = "Homo Sapiens";
// accessing the prototype properties
console.log(me.species, matilda.species);

// console.log(me.hasOwnProperty("firstName")); // true
// console.log(me.hasOwnProperty("species")); // false
