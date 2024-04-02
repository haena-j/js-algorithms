import solution from "../../algorithms/leetcode/0110.balanced-binary-tree";

describe("LeetCode Balanced Binary Tree Test", () => {
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
    expect(result).toEqual(true);
  });

  test("Test case 2", () => {
    const result = solution({
      val: 1,
      left: {
        val: 2,
        left: {
          val: 3,
          left: {
            val: 4,
            left: null,
            right: null,
          },
          right: {
            val: 4,
            left: null,
            right: null,
          },
        },
        right: {
          val: 3,
          left: null,
          right: null,
        },
      },
      right: null,
    });
    expect(result).toEqual(false);
  });

  test("Test case 3", () => {
    const result = solution({
      val: 1,
      left: {
        val: 2,
        left: {
          val: 3,
          left: {
            val: 4,
            left: null,
            right: null,
          },
          right: {
            val: 4,
            left: null,
            right: null,
          },
        },
        right: {
          val: 3,
          left: null,
          right: null,
        },
      },
      right: {
        val: 2,
        left: {
          val: 3,
          left: null,
          right: null,
        },
        right: {
          val: 3,
          left: null,
          right: null,
        },
      },
    });
    expect(result).toEqual(true);
  });
});
