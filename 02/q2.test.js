const { exportAllDeclaration } = require("@babel/types");
const memo = require("./q2");

describe("q2 - memo function", () => {
  it("memoises results", () => {
    function myExpensiveFunc(myString) {
      return `${myString}-${Math.random()}`;
    }

    const myFunc = memo(myExpensiveFunc);

    const resultA = myFunc("Hello");
    const resultB = myFunc("Monday");
    const resultC = myFunc("Hello");

    expect(resultA).not.toBe(undefined);
    expect(resultA).not.toBe(null);
    expect(typeof resultA).toBe("string");
    expect(resultA).toBe(resultC);
  });
});
