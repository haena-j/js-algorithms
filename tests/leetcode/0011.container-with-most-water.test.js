import solution from "../../algorithms/leetcode/0011.container-with-most-water";

describe("LeetCode Container With Most Water Test", () => {
  test("Test case 1", () => {
    expect(solution([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  });

  test("Test case 2", () => {
    expect(solution([1, 1])).toBe(1);
  });

  test("Test case 3", () => {
    expect(solution([4, 3, 2, 1, 4])).toBe(16);
  });

  test("Test case 4", () => {
    expect(solution([1, 2, 1])).toBe(2);
  });
});
