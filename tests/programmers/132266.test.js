import solution from "../../algorithms/programmers/132266";

describe("Programmers 161988 Test", () => {
  test("Test case 1", () => {
    const n = 3;
    const roads = [
      [1, 2],
      [2, 3],
    ];
    const sources = [2, 3];
    const destination = 1;

    expect(solution(n, roads, sources, destination)).toEqual([1, 2]);
  });

  test("Test case 2", () => {
    const n = 5;
    const roads = [
      [1, 2],
      [1, 4],
      [2, 4],
      [2, 5],
      [4, 5],
    ];
    const sources = [1, 3, 5];
    const destination = 5;

    expect(solution(n, roads, sources, destination)).toEqual([2, -1, 0]);
  });

  test("Test case 3", () => {
    const n = 4;
    const roads = [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 1],
    ];
    const sources = [1, 2, 3, 4];
    const destination = 1;

    expect(solution(n, roads, sources, destination)).toEqual([0, 1, 2, 1]);
  });

  test("Test case 4", () => {
    const n = 6;
    const roads = [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [6, 1],
    ];
    const sources = [1, 2, 6];
    const destination = 3;

    expect(solution(n, roads, sources, destination)).toEqual([2, 1, 3]);
  });
});
