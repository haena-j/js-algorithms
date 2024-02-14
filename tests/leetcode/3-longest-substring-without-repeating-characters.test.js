import solution from "../../algorithms/leetcode/3-longest-substring-without-repeating-characters";

describe("LeetCode Longest Substring Without Repeating Characters Test", () => {
  test("Test case 1", () => {
    expect(solution("abcabcbb")).toBe(3);
  });

  test("Test case 2", () => {
    expect(solution("bbbbb")).toBe(1);
  });

  test("Test case 3", () => {
    expect(solution("pwwkew")).toBe(3);
  });

  test("Test case 4", () => {
    expect(solution("")).toBe(0);
  });
});
