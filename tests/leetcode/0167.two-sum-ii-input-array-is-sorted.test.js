import solution from "../../algorithms/leetcode/0167.two-sum-ii-input-array-is-sorted";

describe("LeetCode Two Sum II - Input array is sorted Test", () => {
  test("Test case 1", () => {
    expect(solution([2, 7, 11, 15], 9)).toStrictEqual([1, 2]);
  });

  test("Test case 2", () => {
    expect(solution([2, 3, 4], 6)).toStrictEqual([1, 3]);
  });

  test("Test case 3", () => {
    expect(solution([-1, 0], -1)).toStrictEqual([1, 2]);
  });
});
