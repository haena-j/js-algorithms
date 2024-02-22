import solution from "../../algorithms/leetcode/0010.regular-expression-matching";

describe("LeetCode Regular Expression Matching Test", () => {
  test("Test case 1", () => {
    expect(solution("aa", "a")).toBe(false);
  });

  test("Test case 2", () => {
    expect(solution("aa", "a*")).toBe(true);
  });

  test("Test case 3", () => {
    expect(solution("ab", ".*")).toBe(true);
  });

  test("Test case 4", () => {
    expect(solution("aab", "c*a*b")).toBe(true);
  });

  test("Test case 5", () => {
    expect(solution("mississippi", "mis*is*p*.")).toBe(false);
  });

  test("Test case 6", () => {
    expect(solution("ab", ".*c")).toBe(false);
  });

  test("Test case 7", () => {
    expect(solution("aaa", "aaaa")).toBe(false);
  });

  test("Test case 8", () => {
    expect(solution("aaa", "a*a")).toBe(true);
  });

  test("Test case 9", () => {
    expect(solution("aaa", "ab*a*c*a")).toBe(true);
  });

  test("Test case 10", () => {
    expect(solution("aaa", "ab*a*c*aa")).toBe(true);
  });
});
