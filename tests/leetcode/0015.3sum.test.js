import solution from "../../algorithms/leetcode/0015.3sum";

describe("LeetCode 3Sum Test", () => {
  test("Test case 1", () => {
    expect(solution([-1, 0, 1, 2, -1, -4])).toStrictEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
  });

  test("Test case 2", () => {
    expect(solution([])).toStrictEqual([]);
  });

  test("Test case 3", () => {
    expect(solution([0])).toStrictEqual([]);
  });

  test("Test case 4", () => {
    expect(solution([0, 0, 0, 0])).toStrictEqual([[0, 0, 0]]);
  });
});
