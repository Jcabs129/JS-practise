// material - traversy media
// https://www.youtube.com/watch?v=rRgD1yVwIvE


// youtube finished at 13.51s
const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2003},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Tech", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Tech", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
]

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
//
// for(let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }


//pt2 - explains forEach
// companies.forEach(function(company){
//   console.log(company.name);    //'company' logs the array of objects companies. 'company.name' logs the object's name within the array
// })
//


//.filter - filter things out from the array

//pt1 - explains a forLoop
// let over21 = [];
//   for(let i = 0; i < ages.length; i++) {
//     if(ages[i] >= 21){
//       over21.push(ages[i]);
//     }
//   }
// console.log(over21)

//pt2 - .filter : notice the difference in forLoop to .filter. Not empty array [].
//you dont have to .push into an empty array
// const over21 = ages.filter(function(age){
//   if(age >= 21){
//     return true;
//   }
// })
//
// console.log(over21)


//pt3 .filter es6 version - again look at the difference, no need to call the 'age' a function with parathesis,
// also no if statement
// const over21 = ages.filter(age => age  >= 21);
//
// console.log(over21)
//

//pt4 .filter retail companies - print companies that have the category of "Retail"
// const retailComp = companies.filter(function(cat){
//   if(cat.category === 'Retail'){
//     return true;
//   }
// })
// console.log(retailComp);

//pt5 - es6 version
// const catRetail = companies.filter(cat => cat.category === 'Retail');
// console.log(catRetail)


//pt6 - get companies starting in the 80s
// const eightiesComp = companies.filter(function(begin){
//   if(begin.start >= 1980 & begin.start <= 1989){
//     return true
//   }
// })
// console.log(eightiesComp)

//pt7 - es6 version the same output as pt6. but different syntax
const eightiesComp = companies.filter(begin => (begin.start >= 1980 && begin.start <= 1989));
console.log(eightiesComp);

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// .map - create new arrays of anything from a current array

// create array of companies names
//pt1
// const companyNames = companies.map(function(company){
//   return company.name;
// })
// console.log(companyNames);

//pt1.1 -es6 -
const companyNames = companies.map(company => company.name);
console.log(companyNames);

//pt 1.2 - Destructuring(Search it up)
// const companyNames2 = companies.map(({name}) => name);
// console.log(companyNames2);
//example of destructuring:

// const obj = { name: 'afddsa'}
// const { name } = obj;


//pt2.1
// const testMap1 = companies.map(function(company){
//   return `${company.name} [${company.start} - ${company.start}]`;
// })
// console.log(testMap1);


//pt2.2 - es6
const testMap2 = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
console.log(testMap2);


// how to squareRoot the array agesSqrt
const sqrAges = ages.map(age => Math.sqrt(age));
console.log(sqrAges);

// multply each element within the arrages by 2
const multiply2 = ages.map(age => age *2)
console.log(multiply2);


// how to daisy chain both higherfunctions of `multiply2` and `sqrAges`
const ageMap = ages
    .map(age => Math.sqrt(age))
    .map(age => age *2)

console.log(ageMap);

//.sort
//.map
