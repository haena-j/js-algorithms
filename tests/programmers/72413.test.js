import solution from "../../algorithms/programmers/72413";

describe("Programmers 72413 Test", () => {
  test("Test case 1", () => {
    const n = 6;
    const s = 4;
    const a = 6;
    const b = 2;
    const fares = [
      [4, 1, 10],
      [3, 5, 24],
      [5, 6, 2],
      [3, 1, 41],
      [5, 1, 24],
      [4, 6, 50],
      [2, 4, 66],
      [2, 3, 22],
      [1, 6, 25],
    ];
    expect(solution(n, s, a, b, fares)).toBe(82);
  });

  test("Test case 2", () => {
    const n = 7;
    const s = 3;
    const a = 4;
    const b = 1;
    const fares = [
      [5, 7, 9],
      [4, 6, 4],
      [3, 6, 1],
      [3, 2, 3],
      [2, 1, 6],
    ];
    expect(solution(n, s, a, b, fares)).toBe(14);
  });

  test("Test case 3", () => {
    const n = 6;
    const s = 4;
    const a = 5;
    const b = 6;
    const fares = [
      [2, 6, 6],
      [6, 3, 7],
      [4, 6, 7],
      [6, 5, 11],
      [2, 5, 12],
      [5, 3, 20],
      [2, 4, 8],
      [4, 3, 9],
    ];
    expect(solution(n, s, a, b, fares)).toBe(18);
  });

  test("Test case 4", () => {
    const n = 5;
    const s = 2;
    const a = 4;
    const b = 3;
    const fares = [
      [1, 2, 10],
      [2, 3, 10],
      [2, 4, 20],
      [2, 5, 5],
      [3, 5, 5],
    ];
    expect(solution(n, s, a, b, fares)).toBe(30);
  });

  test("Test case 5", () => {
    const n = 4;
    const s = 1;
    const a = 3;
    const b = 4;
    const fares = [
      [1, 2, 2],
      [2, 3, 2],
      [3, 4, 2],
    ];
    expect(solution(n, s, a, b, fares)).toBe(6);
  });
});
