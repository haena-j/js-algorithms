import solution from "../../algorithms/leetcode/49-group-anagrams";

describe("LeetCode Group Anagrams Test", () => {
  test("test1", () => {
    const result = solution(["eat", "tea", "tan", "ate", "nat", "bat"]);
    expect(result).toEqual(
      expect.arrayContaining([["eat", "tea", "ate"], ["tan", "nat"], ["bat"]])
    );
  });

  test("test2", () => {
    const result = solution(["", "b", "bb", "bbb", "bbbb"]);
    expect(result).toEqual(expect.arrayContaining([[""], ["b"], ["bb"], ["bbb"], ["bbbb"]]));
  });

  test("test3", () => {
    const result = solution(["arc", "car", "rat", "tar", "elbow", "below"]);
    expect(result).toEqual(
      expect.arrayContaining([
        ["arc", "car"],
        ["rat", "tar"],
        ["elbow", "below"],
      ])
    );
  });
});
