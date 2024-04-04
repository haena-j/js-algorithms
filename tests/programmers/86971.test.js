import solution from "../../algorithms/programmers/86971";

describe("Programmers 86971 Test", () => {
  test("Test case 1", () => {
    const n = 9;
    const wires = [
      [1, 3],
      [2, 3],
      [3, 4],
      [4, 5],
      [4, 6],
      [4, 7],
      [7, 8],
      [7, 9],
    ];
    expect(solution(n, wires)).toBe(3);
  });

  test("Test case 2", () => {
    const n = 4;
    const wires = [
      [1, 2],
      [2, 3],
      [3, 4],
    ];
    expect(solution(n, wires)).toBe(0);
  });

  test("Test case 3", () => {
    const n = 7;
    const wires = [
      [1, 2],
      [2, 7],
      [3, 7],
      [3, 4],
      [4, 5],
      [6, 7],
    ];
    expect(solution(n, wires)).toBe(1);
  });
});
