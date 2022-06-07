import {helloWorld} from "./app.js";
helloWorld()

// First class function
//  sum function is also pure function means it does not depend on other conditions
function sum(a, b) {
  return a + b;
}
// calculation function is First class function because it take function as a arguments
const calculation = function (func, arg1, arg2) {
  const result = func(arg1, arg2);
  console.log(arguments); // arguments is a key word using it we can see all args as array.
  return result;
};

console.log(calculation(sum, 2, 3));

// arguments example
function addition() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log("addition ->", sum);
}
addition(1, 2, 3, 4, 5);

// this keyword with normal function
var name = "global"; // this will assign to window object
function outerFunc() {
  var name = "outerFunc";
  console.log("outerFunc", this); // in normal it will refer to window object
  console.log("outerFunc", this.name);
  console.log("outerFunc", name);
  function innerFunc() {
    var name = "innerFunc";
    console.log("innerFunc", this); // in normal it will refer to window object
    console.log("innerFunc", this.name);
    console.log("innerFunc", name);
  }
  innerFunc();
}
outerFunc();

function outerFunc1() {
  var name = "outerFunc1";
  console.log("outerFunc1", this); // in normal it will refer to window object
  console.log("outerFunc1", this.name);
  console.log("outerFunc1", name);
  return function innerFunc1() {
    var name = "innerFunc1";
    console.log("innerFunc1", this); // in normal it will refer to window object
    console.log("innerFunc1", this.name);
    console.log("innerFunc1", name);
  };
}
const a = outerFunc1(); // outerFunc1()()
a();

// when we call this keyword into normal function it (this keyword) will always bind with
// global window object
// 1. if we use function inside function
// 2. if we return function from function
// 3. if we pass function as a argument and call inside
// in all above condition this keyword will bind with only global window object.

// note in strict mode window object not available for binding with this keyword so if we use
// this keyword while strict mode it this throw an error.

console.log("----------------------------------------------");

// "this" with method invocation

var name = "global";
const personObj = {
  name: "person obj",
  getName: function () {
    console.log(this);
    console.log(this.name);
  },
};
personObj.getName();

// now "this" keyword is bind with personObj because that this personObj object invoke this method
// it bond with personObj.

const personObj1 = {
  name: "person obj 1",
  getName: personObj.getName,
};
personObj1.getName();

// now personObj1 is invoke getName function that is why "this" is bind with personObj1.

// "this" is bound where it is invoked, not where it is defined (written code).

function func1() {
  console.log("func1");
}
func1.newName = "function 1";
func1.getName = function () {
  console.log(this);
  console.log(this.newName);
};
func1.getName();
console.log(this);

// here in this above example we are using this keyword inside getName as property of func1
// and func1 function is working as object. (every function are also object in javascript)

console.log("------------------------------- prototype");
// prototype -> almost every object is linked to another object. that linked object is called as
// prototype

const prototypeObj = {
  name: "prototype object",
};
prototypeObj.__proto__.getName = function () {
  return prototypeObj.name;
};
prototypeObj.console = function () {
  return prototypeObj.name;
};
console.log(prototypeObj);
console.log("toString" in prototypeObj);

const arr1 = new Array(1, 2, 3, 4, 5);
arr1.__proto__.sum = function () {
  console.log(arr1);
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  return sum;
};
console.log(arr1.sum());
console.dir(arr1);

// we can link any function or property to a object using __proto__ keyword inside prototype object
// we define property directly to object it will attached inside object and we can check it with
// hasOwnProperty method and if we create method or property using __proto__ keyword it will
// attach method or property to prototype object.

// call apply bind method

function getFullName() {
  return `${this.firstName} ${this.lastName}`;
}
const person1 = {
  getFullName,
  firstName: "Naresh",
  lastName: "Barfa",
};
const person2 = {
  getFullName,
  firstName: "Pravin",
  lastName: "Barfa",
};
const greeting = function (greet) {
  return greet + " " + this.getFullName();
};

console.log(greeting.call(person1, "Good morning"));
console.log(greeting.apply(person1, ["Good morning"]));
const personFullName = getFullName.bind(person1);
console.log(personFullName());

// Invoking Functions as Constructors

const User = function (fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
};

const user1 = new User("Naresh", "Barfa");
const user2 = new User("Dinesh", "Seervi");
console.dir(user2);

console.log("----------------------------------");

// Higher order function
// HOF are functions that operate on other function, by either taking them as an argument
// or returning them. The fact that javascript supports first-class function, makes it possible
// to create Higher Order Function

console.log("-----------------------------------");

const person = {
  name: "naresh barfa",
  age: "24",
  job: "software engineer",
};

// object
// in -> it will return true or false
// ex : "name" in person
// hasOwnProperty -> true or false
// ex : person.hasOwnProperty("name") it will return true if it is not available in prototype property

for (let key in person) {
  console.log("key ", key);
  console.log("value ", person[key]);
}
// propertyIsEnumerable return true if property is iteretable, if not it return false
console.log(person.propertyIsEnumerable("name"));
// "toSting" is not iteratable so it will return false
console.log(person.propertyIsEnumerable("toSting"));

// we can change property enumerable
Object.defineProperty(person, "name", { enumerable: false });
console.log(person.propertyIsEnumerable("name"));

// we can define configurable, it means if we set it false we can not delete or update it value
Object.defineProperty(person, "name", { configurable: false });
delete person.name;
console.log(person);

// Object.keys(objectName) it will return array of keys
const allProperty = Object.keys(person);
console.log("allProperty", allProperty);
// Object.values(objectName) it will return array of values
const allValues = Object.values(person);
console.log("allValues", allValues);

// make object immutable -> means it can not change
// mutable -> can be change
// 1. writable attribute of properties -> we can define property should be immutable or not
// 2. sealing an object -> we can define object should not contain new property
// 3. freezing an object -> should not extend and immutable

Object.defineProperty(person, "age", { writable: false });
person.age = 12; // it will not change age 24 to 12 .it will remain same 24 always
console.log(person);

Object.seal(person); // it will not allow to add new property to person object nor we can delete but we can update its property
person.phone = "123456";
console.log(person);

Object.freeze(person);
// can not add , update and delete its property

// object ES6 features
// object literal extension
// object static function
const company = "new tech";
const employee1 = {
  firstName: "employee1",
  lastName: "last name",
  company: company,
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
// es6 features for object
const employee2 = {
  firstName: "employee2",
  lastName: "last name",
  company,
  getFullName() {
    return this.firstName + " " + this.lastName;
  },
};

// Object.setPrototypeOf()
const person3 = {
  getFullName() {
    return this.firstName + " " + this.lastName;
  },
};

const person4 = {
  firstName: "naresh",
  lastName: "barfa",
};

Object.setPrototypeOf(person4, person3);
// it will add person3 object property into person4's prototype property object
console.log(person4.getFullName());
console.dir(person4);

// Object.assign(obj, obj1, obj2, obj3, obj4)
// Object.assign will do same as setPrototypeOf but it can take more then one object like (obj1,obj2,obj3....)
// and add to first argument object

console.log("----------------------------------------");
// function declaration
function functionName() {
  // statements
}
// function expression
const expressionFunc = function () {
  // statements
};

// IIFE - immediate invoke function expression
// (function(){
//     // statements
//     console.log("IIFE")
// })();

console.log("-------------------------------");
// promise
const promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
});

// resolve runs the first function in .then
promise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// class
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still.`);
  }
}

let animal = new Animal("My animal");

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides!`);
  }
}

let rabbit = new Rabbit("White Rabbit");

rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.hide(); // White Rabbit hides!

// HOF like reduce, map, filter
const integerArray = [1,2,3,4,5,6,7,8];

const totalValue = integerArray.reduce((acc,val)=> acc+ val, 0)
console.log("totalValue", totalValue);
const doubleArray = integerArray.map(val => 2* val);
console.log("doubleArray", doubleArray);
const evenArray = integerArray.filter(val =>{
    if(val%2 == 0) return val
});
console.log("evenArray", evenArray);