import solution from "../../algorithms/leetcode/0033.search-in-rotated-sorted-array";

describe("LeetCode Search in Rotated Sorted Array Test", () => {
  test("Test case 1", () => {
    expect(solution([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
  });

  test("Test case 2", () => {
    expect(solution([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
  });

  test("Test case 3", () => {
    expect(solution([1], 0)).toBe(-1);
  });
});
