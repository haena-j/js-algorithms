import solution from "../../algorithms/leetcode/0242.valid-anagram";

describe("LeetCode Valid Anagram Test", () => {
  test("test1", () => {
    const result = solution("anagram", "nagaram");
    expect(result).toEqual(true);
  });

  test("test2", () => {
    const result = solution("rat", "car");
    expect(result).toEqual(false);
  });
});
