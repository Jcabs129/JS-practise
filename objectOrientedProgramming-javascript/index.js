/*
const circle = {
  radius: 1,                    //properties -
  location: {
      x: 1,
      y: 1
  },
  draw: function() {        //Method
    console.log('draw');
  }
};
*/


/*
/////////////////////
/// Factory Function
function createCircle(radius) {
  return   {
    radius,                    //properties -
    draw: function() {        //Method
      console.log('draw');
      }
  };
}
const circle = createCircle(1);
*/


/*
////////////////
// Constructor Function

function Circle(radius) {
//  console.log('this', this);         // to show what 'this' shows on the chrome console
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}
// new operator will create an empty object which willl inherit 'this' properties 'radius' etc by default
const another = new Circle(1);      // we use 'new' operator to call the circle function and pass 1 as a argument
*/


/*
/////////////////
// Functions and Objects - in Javascripts functions are objects

// When calling 'circle' on the console- Circle will have its own object that will have properties
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}

const Circle1 = new Function('radius', `
    this.radius = radius;
    this.draw = function() {
      console.log('draw');
    }`);
const circle = new Circle1(1);
const another = new Circle(1);
*/

/*
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw')
  }
}
//Here represents methods that we can add within circle object when called on console 'Circle.{method}'
Circle.call({}, 1)
Circle.apply({}, [1, 2, 3, 4])

const another = new Circle(1);

*/

/*
/////////////////
// Primitives and reference types

let x = {value : 10};     // this represents an object -
let y = x;

x.value = 20;
// ---------------

let obj = {value : 10} // global scope

function increase(obj) {
  obj.value++;         // local scope
}

increase(obj);
console.log(obj);
*/


/*
////////////////////
// Adding/removing properties

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}

const circle = new Circle(10);
// in order to add new properties to an existing function, you can add properties with "circle.". call 'circle' on the console
circle.location = { x: 1};
circle.ching = [1, 2, 3, 4];

//circle['location'] = { y : 2};   // the same as circle.location


const propertyName = 'center location'

circle [propertyName] = { x: 1}

delete circle.location;   // this is to delete a property within a function - call 'circle' on the console

*/

/*
//////////////
// Enumerating properties

// in some casses you will need to iterate or enumerate over a property object - you can do this by the for in loop
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}

const circle = new Circle(10);

for (let key in circle) {
  if (typeof circle[key] !== 'function')
    console.log(key, circle[key]);     // this displays the method within the function being called as well as the property 'radius 10'
}

const keys = Object.keys(circle);
console.log(keys);
*/

/*
//////////////
// Abstraction - to hide the details and comlexity and only expose the essentials

//by defining a local variable and setting it to 'let' means you can hide that variable globally, this can
//...be useful when you dont want to show specific variable globally
 function Circle(radius) {
   this.radius = radius;          //anywhere that 'this' is displayed is recognise as a circle property

   let defaultLocation = { x: 0, y: 0 };          // 'let' within the function circle is a local variable (private membrs)

   this.getDefaultLocation = function () {
     return defaultLocation;
   };

   this.draw = function() {
//    computeOptimumLocation(0.1);
    // defaultLocation

     console.log('draw');
   };
// The static method Object.defineProperty() defines a new property directly on an object,...
//...or modifies an existing property on an object, and returns the object.
   Object.defineProperty(this, 'defaultLocation', {
     get: function() {
       return defaultLocation;
     }
   });
 }

const circle = new Circle(10);
//circle.defaultLocation();
circle.draw();
*/


/////////////////////
// Exercise: Create a stopwatch that can; start, stop, restart

// material: https://www.ostraining.com/blog/coding/stopwatch/


function timer(seconds) {
  const now = Date.now();
  const then = now + seconds * 1000;
  console.log({now, then});
}
