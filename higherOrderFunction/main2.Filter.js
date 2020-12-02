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


//es6 syntax - print out ages that are only >= 30
const over30 = ages.filter(age  => age >= 30);
console.log(over30);


const over30 = ages.filter(function(age) {
  if(age >= 30) {
    return true
  }
})
console.log(over30)

// ========================================================

// category of Retail
// pt1
const cate = companies.filter(function(retail) {
  if(retail.category === 'Retail'){
    return true
  }
})
console.log(cate);

// pt2 - es6
const cate = companies.filter(retail => retail.category === 'Retail');
console.log(cate);

// ========================================================

//Get Companies that only start in the 80s
es6
const start80s = companies.filter(company => (company.start >= 1980 && company.start < 1990));
console.log(start80s);


// ========================================================


//Get companies that lasted 10 years or more

const lasted10years = companies.filter(company => company.end - company.start >= 10);
console.log(lasted10years);
