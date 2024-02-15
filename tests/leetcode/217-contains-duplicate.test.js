import solution from "../../algorithms/leetcode/217-contains-duplicate";

describe("LeetCode Contains Duplicate Test", () => {
  test("test1", () => {
    const result = solution([1, 2, 3, 1]);
    expect(result).toEqual(true);
  });

  test("test2", () => {
    const result = solution([1, 2, 3, 4]);
    expect(result).toEqual(false);
  });

  test("test3", () => {
    const result = solution([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);
    expect(result).toEqual(true);
  });
});
