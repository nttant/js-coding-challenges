console.log("Running", "02/q2.js");

function memo(functionToMemoize) {
  // Implement this function
  // functionToMemoize is a fucntion that is received as a parameter
  // This function needs to cache results of calling functionToMemoize(key)
  // and return cached results if they exist instead of calling functionToMemoize(key) again
  // HINTS:
  // Define an object to cache results
  // Return a function that:
  // -- accepts a string parameter
  // -- returns a cached result if that exists
  // -- if there is no result already cached, caches the result and returns the result
  // Add your implementation here:
}

function myExpensiveFunc(myString) {
  // Do not change anythig in here
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
