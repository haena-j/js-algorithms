import solution from "../../algorithms/leetcode/0090.subsets-ii";

describe("LeetCode Subsets II Test", () => {
  test("Test case 1", () => {
    const result = solution([1, 2, 2]);
    expect(result).toEqual([[], [1], [1, 2], [1, 2, 2], [2], [2, 2]]);
  });

  test("Test case 2", () => {
    const result = solution([0]);
    expect(result).toEqual([[], [0]]);
  });

  test("Test case 3", () => {
    const result = solution([1, 2]);
    expect(result).toEqual([[], [1], [1, 2], [2]]);
  });
});
