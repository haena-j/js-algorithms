import solution from "../../algorithms/leetcode/0104.maximum-depth-of-binary-tree";

describe("LeetCode Maximum Depth of Binary Tree Test", () => {
  test("Test case 1", () => {
    const result = solution({
      val: 3,
      left: {
        val: 9,
        left: null,
        right: null,
      },
      right: {
        val: 20,
        left: {
          val: 15,
          left: null,
          right: null,
        },
        right: {
          val: 7,
          left: null,
          right: null,
        },
      },
    });
    expect(result).toEqual(3);
  });

  test("Test case 2", () => {
    const result = solution({
      val: 1,
      left: null,
      right: null,
    });
    expect(result).toEqual(1);
  });

  test("Test case 3", () => {
    const result = solution(null);
    expect(result).toEqual(0);
  });
});
