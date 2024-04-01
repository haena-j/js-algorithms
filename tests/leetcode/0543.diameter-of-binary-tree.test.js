import solution from "../../algorithms/leetcode/0543.diameter-of-binary-tree";

describe("LeetCode Diameter of Binary Tree Test", () => {
  test("Test case 1", () => {
    const result = solution({
      val: 1,
      left: {
        val: 2,
        left: {
          val: 4,
          left: null,
          right: null,
        },
        right: {
          val: 5,
          left: null,
          right: null,
        },
      },
      right: {
        val: 3,
        left: null,
        right: null,
      },
    });
    expect(result).toEqual(3);
  });

  test("Test case 2", () => {
    const result = solution({
      val: 1,
      left: {
        val: 2,
        left: {
          val: 4,
          left: null,
          right: null,
        },
        right: {
          val: 5,
          left: null,
          right: null,
        },
      },
      right: {
        val: 3,
        left: {
          val: 6,
          left: null,
          right: null,
        },
        right: null,
      },
    });
    expect(result).toEqual(4);
  });

  test("Test case 3", () => {
    const result = solution({
      val: 1,
      left: {
        val: 2,
        left: {
          val: 4,
          left: null,
          right: null,
        },
        right: {
          val: 5,
          left: null,
          right: null,
        },
      },
      right: {
        val: 3,
        left: {
          val: 6,
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
    expect(result).toEqual(4);
  });

  test("Test case 4", () => {
    const result = solution({
      val: 1,
      left: {
        val: 2,
        left: {
          val: 4,
          left: null,
          right: null,
        },
        right: {
          val: 5,
          left: null,
          right: null,
        },
      },
      right: {
        val: 3,
        left: {
          val: 6,
          left: null,
          right: null,
        },
        right: {
          val: 7,
          left: {
            val: 8,
            left: null,
            right: null,
          },
          right: null,
        },
      },
    });
    expect(result).toEqual(5);
  });
});
