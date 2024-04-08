import solution from "../../algorithms/programmers/131704";

describe("Programmers 131704 Test", () => {
  test("Test case 1", () => {
    const order = [4, 3, 1, 2, 5];
    expect(solution(order)).toBe(2);
  });

  test("Test case 2", () => {
    const order = [5, 4, 3, 2, 1];
    expect(solution(order)).toBe(5);
  });

  test("Test case 3", () => {
    const order = [1, 2, 3, 4, 5];
    expect(solution(order)).toBe(5);
  });

  test("Test case 4", () => {
    const order = [1, 3, 2, 4, 5];
    expect(solution(order)).toBe(5);
  });
});
