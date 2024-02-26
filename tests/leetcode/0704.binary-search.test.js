import solution from "../../algorithms/leetcode/0704.binary-search";

describe("LeetCode Binary Search Test", () => {
  test("Test case 1", () => {
    expect(solution([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
  });

  test("Test case 2", () => {
    expect(solution([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
  });

  test("Test case 3", () => {
    expect(solution([5], 5)).toBe(0);
  });

  test("Test case 4", () => {
    expect(solution([5], -5)).toBe(-1);
  });
});
