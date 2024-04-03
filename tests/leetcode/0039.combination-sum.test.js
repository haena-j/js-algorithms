import solution from "../../algorithms/leetcode/0039.combination-sum";

describe("LeetCode Combination Sum Test", () => {
  test("Test case 1", () => {
    const result = solution([2, 3, 6, 7], 7);
    expect(result).toEqual([[2, 2, 3], [7]]);
  });

  test("Test case 2", () => {
    const result = solution([2, 3, 5], 8);
    expect(result).toEqual([
      [2, 2, 2, 2],
      [2, 3, 3],
      [3, 5],
    ]);
  });

  test("Test case 3", () => {
    const result = solution([2], 1);
    expect(result).toEqual([]);
  });

  test("Test case 4", () => {
    const result = solution([1], 1);
    expect(result).toEqual([[1]]);
  });

  test("Test case 5", () => {
    const result = solution([1], 2);
    expect(result).toEqual([[1, 1]]);
  });
});
