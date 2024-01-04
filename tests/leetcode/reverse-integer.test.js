import solution from "../../algorithms/leetcode/reverse-integer";

describe("LeetCode Reverse Integer Test", () => {
  test("Test case 1", () => {
    expect(solution(123)).toBe(321);
  });

  test("Test case 2", () => {
    expect(solution(-123)).toBe(-321);
  });

  test("Test case 3", () => {
    expect(solution(120)).toBe(21);
  });

  test("Test case 4", () => {
    expect(solution(0)).toBe(0);
  });

  test("Test case 5", () => {
    expect(solution(8463847412)).toBe(2147483648);
  });

  test("Test case 6", () => {
    expect(solution(9463847412)).toBe(0);
  });
});
