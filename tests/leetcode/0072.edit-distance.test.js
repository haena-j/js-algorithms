import solution from "../../algorithms/leetcode/0072.edit-distance";

describe("LeetCode Edit Distance Test", () => {
  test("Test case 1", () => {
    expect(solution("horse", "ros")).toBe(3);
  });

  test("Test case 2", () => {
    expect(solution("intention", "execution")).toBe(5);
  });

  test("Test case 3", () => {
    expect(solution("kitten", "sitting")).toBe(3);
  });

  test("Test case 4", () => {
    expect(solution("kitten", "kitten")).toBe(0);
  });

  test("Test case 5", () => {
    expect(solution("kitten", "")).toBe(6);
  });

  test("Test case 6", () => {
    expect(solution("", "kitten")).toBe(6);
  });

  test("Test case 7", () => {
    expect(solution("", "")).toBe(0);
  });

  test("Test case 8", () => {
    expect(solution("a", "b")).toBe(1);
  });
});
