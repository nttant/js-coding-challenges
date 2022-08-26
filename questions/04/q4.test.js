const morseCodeEncoder = require("./q4");

describe("q4 - morseCodeEncoder function", () => {
  it("morse code encoder", () => {
    const sentence = "Hello World";
    const result = morseCodeEncoder(sentence);

    const expected = [
      ["....", ".", ".-..", ".-..", "---"],
      [".--", "---", ".-.", ".-..", "-.."],
    ];

    // result needs to be an array
    expect(Array.isArray(result)).toBe(true);
    expect(JSON.stringify(result)).toBe(JSON.stringify(expected));
  });

  it("throws an error if argument is not a string", () => {
    const sentence = [];

    let hasError = false;

    try {
      morseCodeEncoder(sentence);
    } catch (e) {
      hasError = true;
    }

    expect(hasError).toBe(true);
  });

  it("returns an empty array if argument string is empty", () => {
    const sentence = "";

    const result = morseCodeEncoder(sentence);

    expect(Array.isArray(result)).toBe(true);
    expect(JSON.stringify(result)).toBe(JSON.stringify([]));
  });
});
