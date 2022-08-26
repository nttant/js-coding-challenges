const countWords = require("./q3");

describe("q3 - countWords function", () => {
  it("counts words", () => {
    const sentence =
      "and hat cat at hat cat and about at hat hat at mat sat mat about at about";

    const result = countWords(sentence);

    // result needs to be an object literal
    expect(Object.getPrototypeOf(result)).toBe(Object.prototype);
    expect(result["and"]).toBe(2);
    expect(result["hat"]).toBe(4);
    expect(result["cat"]).toBe(2);
    expect(result["at"]).toBe(4);
    expect(result["about"]).toBe(3);
    expect(result["mat"]).toBe(2);
  });

  it("throws an error if argument is not a string", () => {
    const sentence = [];

    let hasError = false;

    try {
      countWords(sentence);
    } catch (e) {
      hasError = true;
    }

    expect(hasError).toBe(true);
  });

  it("returns an empty object if argument string is empty", () => {
    const sentence = "";

    const result = countWords(sentence);

    expect(Object.getPrototypeOf(result)).toBe(Object.prototype);
    expect(JSON.stringify(result)).toBe(JSON.stringify({}));
  });
});
