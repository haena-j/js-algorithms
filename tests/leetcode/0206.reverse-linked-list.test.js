import solution from "../../algorithms/leetcode/0206.reverse-linked-list";

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

describe("LeetCode Reverse Linked List Test", () => {
  test("Test case 1", () => {
    const head = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
    );
    const output = new ListNode(
      5,
      new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(1))))
    );
    expect(solution(head)).toStrictEqual(output);
  });

  test("Test case 2", () => {
    const head = new ListNode(1, new ListNode(2));
    const output = new ListNode(2, new ListNode(1));
    expect(solution(head)).toStrictEqual(output);
  });

  test("Test case 3", () => {
    const head = new ListNode(1);
    const output = new ListNode(1);
    expect(solution(head)).toStrictEqual(output);
  });

  test("Test case 4", () => {
    const head = null;
    const output = null;
    expect(solution(head)).toStrictEqual(output);
  });
});
