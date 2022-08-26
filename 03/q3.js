console.log("Running", "03/q3.js");

function countWords(sentence = "") {
  // Implement the body of this function.
  // The function should calculate the number of occurances
  // of each word in the sentence and then return an object
  // example: { and: 2, hat: 4, cat: 2, at: 4, about: 3, mat: 2, sat: 1 }
  //  where the key is the word and the value is an integer indicating
  // the number of occurances of the word.
  // If anything other than a string is passed as an argument then throw an error
  // Assume only single spaces in the sentence and only A to Z and a to z characters are used
  // Add your implementation here:
}

const sentence =
  "and hat cat at hat cat and about at hat hat at mat sat mat about at about";

const result = countWords(sentence);

console.log(result);

// Do not change this
module.exports = countWords;
