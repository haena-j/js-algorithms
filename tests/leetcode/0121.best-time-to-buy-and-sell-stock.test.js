import solution from "../../algorithms/leetcode/0121.best-time-to-buy-and-sell-stock";

describe("LeetCode Best Time to Buy and Sell Stock Test", () => {
  test("Test case 1", () => {
    expect(solution([7, 1, 5, 3, 6, 4])).toBe(5);
  });

  test("Test case 2", () => {
    expect(solution([7, 6, 4, 3, 1])).toBe(0);
  });

  test("Test case 3", () => {
    expect(solution([1, 2])).toBe(1);
  });

  test("Test case 4", () => {
    expect(solution([2, 1])).toBe(0);
  });
});
