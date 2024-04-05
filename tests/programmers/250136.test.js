import solution from "../../algorithms/programmers/250136";

describe("Programmers 250136 Test", () => {
  test("Test case 1", () => {
    const land = [
      [0, 0, 0, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 1, 1, 0, 0],
      [1, 1, 0, 0, 0, 1, 1, 0],
      [1, 1, 1, 0, 0, 0, 0, 0],
      [1, 1, 1, 0, 0, 0, 1, 1],
    ];
    expect(solution(land)).toBe(9);
  });

  test("Test case 2", () => {
    const land = [
      [1, 0, 1, 0, 1, 1],
      [1, 0, 1, 0, 0, 0],
      [1, 0, 1, 0, 0, 1],
      [1, 0, 0, 1, 0, 0],
      [1, 0, 0, 1, 0, 1],
      [1, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1],
    ];
    expect(solution(land)).toBe(16);
  });

  test("Test case 3", () => {
    const land = [
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
    ];
    expect(solution(land)).toBe(16);
  });

  test("Test case 4", () => {
    const land = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];
    expect(solution(land)).toBe(0);
  });
});
