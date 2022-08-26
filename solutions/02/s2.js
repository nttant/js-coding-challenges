console.log("Running", "solutions/02/s2.js");

function memo(functionToMemoize) {
  const cache = {};

  return function helper(key) {
    if (!cache[key]) {
      cache[key] = functionToMemoize(key);
    }
    return cache[key];
  };
}

function myExpensiveFunc(myString) {
  return `${myString}-${Math.random()}`;
}

function checkResults() {
  // This function is for your convenience
  // to test output
  const myFunc = memo(myExpensiveFunc);

  const resultA = myFunc("Hello");
  const resultB = myFunc("Monday");
  const resultC = myFunc("Hello");

  console.log("Results for A and C should match:");
  console.log("resultA:", resultA);
  console.log("resultC:", resultC);
}

checkResults();

module.exports = memo;
