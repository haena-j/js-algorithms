import solution from "../../algorithms/leetcode/0070.climbing-stairs";

describe("LeetCode Climbing Stairs Test", () => {
  test("Test case 1", () => {
    expect(solution(2)).toBe(2);
  });

  test("Test case 2", () => {
    expect(solution(3)).toBe(3);
  });

  test("Test case 3", () => {
    expect(solution(4)).toBe(5);
  });

  test("Test case 4", () => {
    expect(solution(5)).toBe(8);
  });

  test("Test case 5", () => {
    expect(solution(10)).toBe(89);
  });

  test("Test case 6", () => {
    expect(solution(20)).toBe(10946);
  });
});
