import solution from "../../algorithms/leetcode/0153.find-minimum-in-rotated-sorted-array";

describe("LeetCode Find Minimum in Rotated Sorted Array Test", () => {
  test("Test case 1", () => {
    expect(solution([3, 4, 5, 1, 2])).toBe(1);
  });

  test("Test case 2", () => {
    expect(solution([4, 5, 6, 7, 0, 1, 2])).toBe(0);
  });

  test("Test case 3", () => {
    expect(solution([11, 13, 15, 17])).toBe(11);
  });

  test("Test case 4", () => {
    expect(solution([1])).toBe(1);
  });

  test("Test case 5", () => {
    expect(solution([2, 1])).toBe(1);
  });

  test("Test case 6", () => {
    expect(solution([3, 1, 2])).toBe(1);
  });
});
