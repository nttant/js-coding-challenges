console.log("Running", "solutions/04/s4.js");

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
  if (typeof sentence !== "string") {
    throw new Error("A string argument is required");
  }

  if (!sentence) {
    return [];
  }

  const wordsArray = sentence.split(" ");

  const encoded = [];

  wordsArray.forEach((word) => {
    const encodedWord = [];
    const lowerCaseWord = word.toLowerCase();
    const lettersArray = lowerCaseWord.split("");
    lettersArray.forEach((letter) => {
      encodedWord.push(morsecode[letter]);
    });
    encoded.push(encodedWord);
  });

  return encoded;
}

const sentence = "Hello World";

const result = morseCodeEncoder(sentence);

console.log(result);

// Do not change this
module.exports = morseCodeEncoder;
