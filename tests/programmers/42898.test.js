import solution from "../../algorithms/programmers/42898";

describe("Programmers 42898 Test", () => {
  test("Test case 1", () => {
    const m = 4;
    const n = 3;
    const puddles = [[2, 2]];
    expect(solution(m, n, puddles)).toBe(4);
  });

  test("Test case 2", () => {
    const m = 4;
    const n = 4;
    const puddles = [
      [2, 2],
      [3, 3],
    ];
    expect(solution(m, n, puddles)).toBe(4);
  });

  test("Test case 3", () => {
    const m = 4;
    const n = 4;
    const puddles = [
      [2, 2],
      [3, 2],
      [2, 3],
    ];
    expect(solution(m, n, puddles)).toBe(2);
  });

  test("Test case 4", () => {
    const m = 1;
    const n = 1;
    const puddles = [];
    expect(solution(m, n, puddles)).toBe(1);
  });
});
