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
function createCircle( radius) {
  return   {
    radius,                    //properties -
    draw: function() {        //Method
      console.log('draw');
    }
};
const circle = createCircle(1);
*/

////////////////
// Constructor Function
function Circle(radius) {
//  console.log('this', this);         // to show what 'this' shows on the chrome console
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}

const Circle1 = new Function('radius',  `
    this.radius = radius;
    this.draw = function() {
  console.log('draw');
    }`
);
const circle = new Circle1(1);

// new operator will create an empty object which willl inherit 'this' properties 'radius' etc by default
const another = new Circle(1);      // we use 'new' operator to call the circle function and pass 1 as a argument
