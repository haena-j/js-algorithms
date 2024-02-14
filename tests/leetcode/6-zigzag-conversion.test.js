import solution from "../../algorithms/leetcode/6-zigzag-conversion";

describe("LeetCode Zigzag Conversion Test", () => {
  test("Test case 1", () => {
    expect(solution("PAYPALISHIRING", 3)).toBe("PAHNAPLSIIGYIR");
  });

  test("Test case 2", () => {
    expect(solution("PAYPALISHIRING", 4)).toBe("PINALSIGYAHRPI");
  });

  test("Test case 3", () => {
    expect(solution("A", 1)).toBe("A");
  });
});
