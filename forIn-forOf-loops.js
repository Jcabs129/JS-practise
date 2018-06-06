/*
material
- https://www.youtube.com/watch?v=a3KHBqH7njs&index=21&list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5&frags=wn&ab_channel=freeCodeCamp
*/


/* for... in / for.... of - are way to loop in objects*/

/*
- for in will loop through property names
- for of will loop through property values

example of usage:
for (variable in object){
  statements
}

for (variable of object){
  statements
}
*/


// for....in loop
let person = {fname: "James", lname:"Cabeso", arms:2};

let arr = [3, 5, 7];
arr.foo = 'hello';  //custom property

//this block of code will loop through the array person and print out the x property which = "names" etc
let text = "";
for (let x in person) {
  text += person[x];
  console.log(x);
};
console.log(text);

// for....of loop - loops through iterable objects '[]'

// (let i in arr) will run the object and print out the numeric index = "0" "1" "2"
for (let i in arr) {
  console.log(i);
};

// (let i for arr) will run the object and print the array within the objects = "3" "5" "7"
for (let i of arr) {
  console.log(i);
};

////////////////////////////////////////////////////////////////////////////////////////////////
/*
Material:
- https://www.youtube.com/watch?v=31CPKEZCZa8&ab_channel=CodingPhase
- https://www.w3schools.com/jsref/jsref_forin.asp
*/

// for... of loop
var classPlayers = [
  {
    name: "Ronaldo",
    shirtNo: 7
  },
  {
    name: "Messi",
    shirtNo: 10
  },
  {
    name: "Neymar",
    shirtNo: 9
  }
]

    for (i in classPlayers){
    console.log(classPlayers[i]);      // this line prints out the array of properties
    console.log(classPlayers[i].name);   // This prints out a Property within a array - in this case 'name'
    console.log(classPlayers[i].shirtNo)
    };
