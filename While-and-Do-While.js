
/*
material - https://medium.freecodecamp.org/my-giant-javascript-basics-course-is-now-live-on-youtube-and-its-100-free-9020a21bbc27
https://www.youtube.com/watch?v=v9zgD8wjtbw&list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5&index=14&ab_channel=freeCodeCamp
*/

//While, Do While - they both allow you to repeat code

//while loop specifies a statement, as long as the test condition evaluste to true
var n = 0;

while (n < 5) {
  n++;

  if(n === 3) continue;  //continue command: will run before 3 but once the iteration lands on 3 it will stop and continue to the next. hence why '3' is missing
//   if(n === 3) break;    // Break will discountinue once the iteration lands on '3' - " 1, 2 "

  console.log(n);
}

//Do While - creates a loop that executes untill the test condition = false

//i++ the same as i = 1 + 0

var i = 0

do {
   i++;
   console.log(i)

}while(i < 5)
