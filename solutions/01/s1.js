console.log("Running", "solutions/01/s1.js");

function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Arguments need to be numbers");
  }

  return a + b;
}

module.exports = add;
