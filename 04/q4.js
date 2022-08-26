console.log("Running", "04/q4.js");

const morsecode = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
};

function morseCodeEncoder(sentence = "") {
  // Assume that senntense only contains characters A to Z and a to z
  // and it does not contain numbers or punctuation
  // This function should encode the sentence into morse code using the definitions
  // in morsecode object. It shoud then return an array of arrays with the encoded morse code.
  // where each encoded word should iteslf be in an array.
  // Example 1: "hello" encoded should be
  // [["....", ".", ".-..", ".-..", "---"]]
  // Example 2: 'Hello World encoded should be
  // [["....", ".", ".-..", ".-..", "---"], [".--", "---", ".-.", ".-..", "-.."]]
  // If anything other than a string is passed as an argument then throw an error
  // If an emoty string is passed in as an argument then return an empty array []
  // Add your implementation code here:
}

const sentence = "Hello World";

const result = morseCodeEncoder(sentence);

console.log(result);

// Do not change this
module.exports = morseCodeEncoder;
