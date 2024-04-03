import solution from "../../algorithms/leetcode/0078.subsets";

describe("LeetCode Subsets Test", () => {
  test("Test case 1", () => {
    const result = solution([1, 2, 3]);
    expect(result).toEqual([[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]);
  });

  test("Test case 2", () => {
    const result = solution([0]);
    expect(result).toEqual([[], [0]]);
  });

  test("Test case 3", () => {
    const result = solution([]);
    expect(result).toEqual([]);
  });

  test("Test case 4", () => {
    const result = solution([1, 2]);
    expect(result).toEqual([[], [1], [2], [1, 2]]);
  });
});
