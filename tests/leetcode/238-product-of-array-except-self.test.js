import solution from "../../algorithms/leetcode/238-product-of-array-except-self";

describe("LeetCode Product of Array Except Self Test", () => {
  test("test1", () => {
    const result = solution([1, 2, 3, 4]);
    expect(result).toEqual([24, 12, 8, 6]);
  });

  test("test2", () => {
    const result = solution([1, 2, 3, 4, 5]);
    expect(result).toEqual([120, 60, 40, 30, 24]);
  });
});
