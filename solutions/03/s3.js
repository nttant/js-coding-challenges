console.log("Running", "solutions/03/s3.js");

function countWords(sentence = "") {
  if (typeof sentence !== "string") {
    throw new Error("A string argument is required");
  }

  if (!sentence) {
    return {};
  }

  const counts = {};
  const wordsArray = sentence.split(" ");

  wordsArray.forEach((word) => {
    if (counts[word]) {
      counts[word] = counts[word] + 1;
    } else {
      counts[word] = 1;
    }
  });

  return counts;
}

const sentence =
  "and hat cat at hat cat and about at hat hat at mat sat mat about at about";

const result = countWords(sentence);

console.log(result);

// Do not change this
module.exports = countWords;
