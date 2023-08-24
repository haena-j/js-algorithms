import solution from "../../algorithms/programmers/161988";

describe("Programmers 161988 Test", () => {
  test("Test case 1", () => {
    const sequence = [2, 3, -6, 1, 3, -1, 2, 4];
    expect(solution(sequence)).toBe(10);
  });

  test("Test case 2", () => {
    const sequence = [5, -3, 2, -1, 7, -4];
    expect(solution(sequence)).toBe(22);
  });

  test("Test case 3", () => {
    const sequence = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    expect(solution(sequence)).toBe(13);
  });

  test("Test case 4", () => {
    const sequence = [-1, 2, -3, 4, 1, -2, 1, 5, -3];
    expect(solution(sequence)).toBe(14);
  });
});
