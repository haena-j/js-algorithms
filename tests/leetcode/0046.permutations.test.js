import solution from "../../algorithms/leetcode/0046.permutations";

describe("LeetCode Permutations Test", () => {
  test("Test case 1", () => {
    const result = solution([1, 2, 3]);
    expect(result).toEqual([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ]);
  });

  test("Test case 2", () => {
    const result = solution([0, 1]);
    expect(result).toEqual([
      [0, 1],
      [1, 0],
    ]);
  });

  test("Test case 3", () => {
    const result = solution([1]);
    expect(result).toEqual([[1]]);
  });
});
