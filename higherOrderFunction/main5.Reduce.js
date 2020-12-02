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

///////////////////////////
//.Reduce

//add all the elements within the ages array to gove the total amount.

// 1.1
// let ageSum = 0
// for(let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }
// console.log(ageSum);


//1.2
// const ageSum = ages.reduce(function(total, age){
//     return total + age;
// }, 0)                // this represents the second parameter of the total
// console.log(ageSum);


// 1.3 - es6

const ageSum = ages.reduce((age, total) => age + total, 0);
console.log(ageSum)

// Get total years for all companies

//pt2.1
// const totalYear = companies.reduce(function(total, company){
//   return total + (company.end - company.start);
// })
// console.log(totalYear);


//2.2 - es6
// when we add another parameter of ',0' we are then sorting the array from the beginning
const totalYear = companies.reduce((total, company) => total + (company.end - company.start),0);
console.log(totalYear)



//Combined Methods
const combine = ages
    .map(age => age * 2)                          // we * 2 for each element in the array (ages)
    .filter(age => age >= 40)                     // we are filtering ages that are >= 40
    .sort((total, age) => total - age)            // Then we are sorting the array
    .reduce((total, age) => total + age, 0);      // we then are adding them together 'age + total'

console.log(combine);
