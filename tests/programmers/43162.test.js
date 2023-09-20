import solution from "../../algorithms/programmers/43162";

describe("Programmers 43162 Test", () => {
  test("Test case 1", () => {
    const n = 3;
    const computers = [
      [1, 1, 0],
      [1, 1, 0],
      [0, 0, 1],
    ];
    expect(solution(n, computers)).toBe(2);
  });

  test("Test case 2", () => {
    const n = 3;
    const computers = [
      [1, 1, 0],
      [1, 1, 1],
      [0, 1, 1],
    ];
    expect(solution(n, computers)).toBe(1);
  });
});
