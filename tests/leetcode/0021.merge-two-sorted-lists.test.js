import solution, { ListNode } from "../../algorithms/leetcode/0021.merge-two-sorted-lists";

describe("LeetCode Merge Two Sorted Lists Test", () => {
  test("Test case 1", () => {
    const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
    const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
    const output = new ListNode(
      1,
      new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4)))))
    );
    expect(solution(list1, list2)).toStrictEqual(output);
  });

  test("Test case 2", () => {
    const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
    const list2 = null;
    const output = new ListNode(1, new ListNode(2, new ListNode(4)));
    expect(solution(list1, list2)).toStrictEqual(output);
  });

  test("Test case 3", () => {
    const list1 = null;
    const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
    const output = new ListNode(1, new ListNode(3, new ListNode(4)));
    expect(solution(list1, list2)).toStrictEqual(output);
  });

  test("Test case 4", () => {
    const list1 = null;
    const list2 = null;
    const output = null;
    expect(solution(list1, list2)).toStrictEqual(output);
  });
});
