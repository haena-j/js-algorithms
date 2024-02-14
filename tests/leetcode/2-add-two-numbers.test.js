import solution, { ListNode } from "../../algorithms/leetcode/2-add-two-numbers";

describe("LeetCode Add Two Numbers Test", () => {
  test("Test case 1", () => {
    const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
    const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
    const result = new ListNode(7, new ListNode(0, new ListNode(8)));
    expect(solution(l1, l2)).toEqual(result);
  });

  test("Test case 2", () => {
    const l1 = new ListNode(0);
    const l2 = new ListNode(0);
    const result = new ListNode(0);
    expect(solution(l1, l2)).toEqual(result);
  });

  test("Test case 3", () => {
    const l1 = new ListNode(
      9,
      new ListNode(
        9,
        new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))
      )
    );
    const l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));
    const result = new ListNode(
      8,
      new ListNode(
        9,
        new ListNode(
          9,
          new ListNode(9, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(1)))))
        )
      )
    );
    expect(solution(l1, l2)).toEqual(result);
  });
});
