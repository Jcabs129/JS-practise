// https://www.youtube.com/watch?v=YsgdUaOrFnQ - wordNIK api
// https://www.youtube.com/watch?v=QO4NXhWo_NM - promises


// let wordnikAPI = "https://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&limit=10&api_key=ebda2c2b67da26e3af9090714cf02094cfd418cc2c31975ee"
//
// function setup() {
//
//   let promise = fetch(wordnikAPI);
//
// }
// console.log(promise)

function setup() {
  noCanvas();
  setTimeout(sayHello, 6000);
}

function sayHello() {
  createP('hello');
}
