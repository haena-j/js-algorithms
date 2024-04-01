import solution from "../../algorithms/leetcode/0226.invert-binary-tree";

describe("LeetCode Invert Binary Tree Test", () => {
  test("test1", () => {
    const result = solution({
      val: 4,
      left: {
        val: 2,
        left: { val: 1, left: null, right: null },
        right: { val: 3, left: null, right: null },
      },
      right: {
        val: 7,
        left: { val: 6, left: null, right: null },
        right: { val: 9, left: null, right: null },
      },
    });
    expect(result).toEqual({
      val: 4,
      left: {
        val: 7,
        left: { val: 9, left: null, right: null },
        right: { val: 6, left: null, right: null },
      },
      right: {
        val: 2,
        left: { val: 3, left: null, right: null },
        right: { val: 1, left: null, right: null },
      },
    });
  });
});
