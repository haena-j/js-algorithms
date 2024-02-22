import solution from "../../algorithms/leetcode/0128.longest-consecutive-sequence";

describe("LeetCode Longest Consecutive Sequence Test", () => {
  test("Test case 1", () => {
    const nums = [100, 4, 200, 1, 3, 2];
    expect(solution(nums)).toBe(4);
  });

  test("Test case 2", () => {
    const nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
    expect(solution(nums)).toBe(9);
  });

  test("Test case 3", () => {
    const nums = [1, 2, 0, 1];
    expect(solution(nums)).toBe(3);
  });

  test("Test case 4", () => {
    const nums = [1, 2, 0, 1, 2];
    expect(solution(nums)).toBe(3);
  });
});
