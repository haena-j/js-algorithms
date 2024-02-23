import solution from "../../algorithms/leetcode/0125.valid-palindrome";

describe("LeetCode Valid Palindrome Test", () => {
  test("Test case 1", () => {
    expect(solution("A man, a plan, a canal: Panama")).toBe(true);
  });

  test("Test case 2", () => {
    expect(solution("race a car")).toBe(false);
  });

  test("Test case 3", () => {
    expect(solution("")).toBe(true);
  });

  test("Test case 4", () => {
    expect(solution("a")).toBe(true);
  });

  test("Test case 5", () => {
    expect(solution("!!!")).toBe(true);
  });

  test("Test case 6", () => {
    expect(solution("Ab!!b!a")).toBe(true);
  });
});
