/*For Loops*/

//for ([initialisation]; [condition]; [final-expression]) {}

var ourArray = []

for (var i = 0; i < 5; i++){
  if (i > 2) break; // break - to break out of a loop, in this case after '2', the iteration will stop.
  ourArray.push(i);
}
console.log(ourArray);


//var arr = [10, 9, 8, 7, 6];

var arr = [
[1,2], [3,4], [5,6]
];

for (var i = 0; i < arr.length; i++) {    // 1st for loop .....
  for (var j = 0; j < arr[i].length; j++){     // nested for loop

  console.log(arr[i][j]);
  }
};
//console.log(arr[i])
