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
///////////////////////
////////// .map - create new arrays of anything from a current array

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
const multiply2 = ages.map(age => age * 2)
console.log(multiply2);


// how to daisy chain both higherfunctions of `multiply2` and `sqrAges`
const ageMap = ages
    .map(age => Math.sqrt(age))
    .map(age => age *2)

console.log(ageMap);
