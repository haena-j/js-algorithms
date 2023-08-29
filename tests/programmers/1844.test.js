import solution from "../../algorithms/programmers/1844";

describe("Programmers 1844 Test", () => {
  test("Test case 1", () => {
    const maps = [
      [1, 0, 1, 1, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 1, 1],
      [1, 1, 1, 0, 1],
      [0, 0, 0, 0, 1],
    ];
    expect(solution(maps)).toBe(11);
  });

  test("Test case 2", () => {
    const maps = [
      [1, 0, 1, 1, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 1, 1],
      [1, 1, 1, 0, 0],
      [0, 0, 0, 0, 1],
    ];
    expect(solution(maps)).toBe(-1);
  });

  test("Test case 3", () => {
    const maps = [
      [1, 1, 1, 1, 1],
      [1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1],
    ];
    expect(solution(maps)).toBe(7);
  });
});
