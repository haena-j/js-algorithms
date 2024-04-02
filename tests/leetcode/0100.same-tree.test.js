import solution from "../../algorithms/leetcode/0100.same-tree";

describe("LeetCode Same Tree Test", () => {
  test("Test case 1", () => {
    const result = solution(
      {
        val: 1,
        left: {
          val: 2,
          left: null,
          right: null,
        },
        right: {
          val: 3,
          left: null,
          right: null,
        },
      },
      {
        val: 1,
        left: {
          val: 2,
          left: null,
          right: null,
        },
        right: {
          val: 3,
          left: null,
          right: null,
        },
      }
    );
    expect(result).toEqual(true);
  });

  test("Test case 2", () => {
    const result = solution(
      {
        val: 1,
        left: {
          val: 2,
          left: null,
          right: null,
        },
        right: {
          val: 3,
          left: null,
          right: null,
        },
      },
      {
        val: 1,
        left: {
          val: 2,
          left: null,
          right: null,
        },
        right: {
          val: 3,
          left: null,
          right: {
            val: 4,
            left: null,
            right: null,
          },
        },
      }
    );
    expect(result).toEqual(false);
  });

  test("Test case 3", () => {
    const result = solution(null, null);
    expect(result).toEqual(true);
  });
});
