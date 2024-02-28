import solution from "../../algorithms/leetcode/0074.search-a-2d-matrix";

describe("LeetCode Search a 2D Matrix Test", () => {
  test("Test case 1", () => {
    const matrix = [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 50],
    ];
    expect(solution(matrix, 3)).toBe(true);
  });

  test("Test case 2", () => {
    const matrix = [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 50],
    ];
    expect(solution(matrix, 13)).toBe(false);
  });

  test("Test case 3", () => {
    const matrix = [[1, 3]];
    expect(solution(matrix, 3)).toBe(true);
  });

  test("Test case 4", () => {
    const matrix = [[1, 3]];
    expect(solution(matrix, 2)).toBe(false);
  });
});
