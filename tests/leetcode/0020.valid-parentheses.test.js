import solution from "../../algorithms/leetcode/0020.valid-parentheses";

describe("LeetCode Valid Parentheses Test", () => {
  test("Test case 1", () => {
    const result = solution("()");
    expect(result).toEqual(true);
  });

  test("Test case 2", () => {
    const result = solution("()[]{}");
    expect(result).toEqual(true);
  });

  test("Test case 3", () => {
    const result = solution("(]");
    expect(result).toEqual(false);
  });

  test("Test case 4", () => {
    const result = solution("([)]");
    expect(result).toEqual(false);
  });

  test("Test case 5", () => {
    const result = solution("((");
    expect(result).toEqual(false);
  });
});
