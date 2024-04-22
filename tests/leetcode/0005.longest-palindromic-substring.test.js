import solution from "../../algorithms/leetcode/0005.longest-palindromic-substring";

describe("LeetCode Longest Palindromic Substring Test", () => {
  test("Test case 1", () => {
    expect(solution("babad")).toBe("bab");
  });

  test("Test case 2", () => {
    expect(solution("cbbd")).toBe("bb");
  });

  test("Test case 3", () => {
    expect(solution("a")).toBe("a");
  });

  test("Test case 4", () => {
    expect(solution("abcba")).toBe("abcba");
  });
});
