const add = require("./q1");

describe("q1 - add function", () => {
  it("add 10 + 5 to equal 15", () => {
    let result;
    try {
      result = add(10, 5);
    } catch (e) {
      console.log(e);
    }
    expect(result).toBe(15);
  });

  it("add 10.5 + 5.3 to equal 15.8", () => {
    let result;
    try {
      result = add(10.5, 5.3);
    } catch (e) {
      console.log(e);
    }
    expect(result).toBe(15.8);
  });

  it("add 'abc' + 'def' should be an error", () => {
    let result;
    try {
      result = add("abc", "def");
    } catch (e) {
      result = "error";
      console.log(e);
    }
    expect(result).toBe("error");
  });

  it("add [1, 2, 3] + [4, 5, 6] should be an error", () => {
    let result;
    try {
      result = add([1, 2, 3], [4, 5, 6]);
    } catch (e) {
      result = "error";
    }
    expect(result).toBe("error");
  });

  it("add {} + {} should be an error", () => {
    let result;
    try {
      result = add({}, {});
    } catch (e) {
      result = "error";
    }
    expect(result).toBe("error");
  });
});
