import solution from "../../algorithms/leetcode/0875.koko-eating-bananas";

describe("LeetCode Koko Eating Bananas Test", () => {
  test("Test case 1", () => {
    expect(solution([3, 6, 7, 11], 8)).toBe(4);
  });

  test("Test case 2", () => {
    expect(solution([30, 11, 23, 4, 20], 5)).toBe(30);
  });

  test("Test case 3", () => {
    expect(solution([30, 11, 23, 4, 20], 6)).toBe(23);
  });
});
