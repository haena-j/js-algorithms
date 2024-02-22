import solution from "../../algorithms/leetcode/0008.string-to-integer-atoi";

describe("LeetCode String to Integer (atoi) Test", () => {
  test("Test case 1", () => {
    expect(solution("42")).toBe(42);
  });

  test("Test case 2", () => {
    expect(solution("   -42")).toBe(-42);
  });

  test("Test case 3", () => {
    expect(solution("4193 with words")).toBe(4193);
  });

  test("Test case 4", () => {
    expect(solution("words and 987")).toBe(0);
  });

  test("Test case 5", () => {
    expect(solution("-91283472332")).toBe(-2147483648);
  });

  test("Test case 6", () => {
    expect(solution("3.14159")).toBe(3);
  });

  test("Test case 7", () => {
    expect(solution("")).toBe(0);
  });

  test("Test case 8", () => {
    expect(solution("+")).toBe(0);
  });

  test("Test case 9", () => {
    expect(solution("+-2")).toBe(0);
  });

  test("Test case 10", () => {
    expect(solution("  -0012a42")).toBe(-12);
  });

  test("Test case 11", () => {
    expect(solution("  +0 123")).toBe(0);
  });

  test("Test case 12", () => {
    expect(solution("2147483648")).toBe(2147483647);
  });
});
