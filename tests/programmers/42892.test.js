import solution from "../../algorithms/programmers/42892";

describe("Programmers 42892 Test", () => {
  test("Test case 1", () => {
    const nodeinfo = [
      [5, 3],
      [11, 5],
      [13, 3],
      [3, 5],
      [6, 1],
      [1, 3],
      [8, 6],
      [7, 2],
      [2, 2],
    ];
    expect(solution(nodeinfo)).toEqual([
      [7, 4, 6, 9, 1, 8, 5, 2, 3],
      [9, 6, 5, 8, 1, 4, 3, 2, 7],
    ]);
  });

  test("Test case 2", () => {
    const nodeinfo = [
      [2, 2],
      [5, 3],
      [3, 5],
      [7, 3],
      [9, 5],
    ];
    expect(solution(nodeinfo)).toEqual([
      [3, 1, 5, 2, 4],
      [1, 4, 2, 5, 3],
    ]);
  });

  test("Test case 3", () => {
    const nodeinfo = [
      [1, 2],
      [2, 5],
      [3, 3],
      [4, 6],
      [5, 1],
      [6, 4],
    ];
    expect(solution(nodeinfo)).toEqual([
      [4, 2, 1, 3, 6, 5],
      [1, 3, 2, 5, 6, 4],
    ]);
  });
});
