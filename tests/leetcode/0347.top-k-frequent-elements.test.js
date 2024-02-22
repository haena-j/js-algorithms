import solution from "../../algorithms/leetcode/0347.top-k-frequent-elements";

describe("LeetCode Top K Frequent Elements Test", () => {
  test("test1", () => {
    const result = solution([1, 1, 1, 2, 2, 3], 2);
    expect(result).toEqual([1, 2]);
  });

  test("test2", () => {
    const result = solution([1], 1);
    expect(result).toEqual([1]);
  });

  test("test3", () => {
    const result = solution([1, 2], 2);
    expect(result).toEqual([1, 2]);
  });

  test("test4", () => {
    const result = solution([4, 1, -1, 2, -1, 2, 3], 2);
    expect(result).toEqual([-1, 2]);
  });
});
