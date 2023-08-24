import solution from "../../algorithms/programmers/68646";

describe("Programmers 68646 Test", () => {
  test("Test case 1", () => {
    const a = [9, -1, -5];
    expect(solution(a)).toBe(3);
  });

  test("Test case 2", () => {
    const a = [-16, 27, 65, -2, 58, -92, -71, -68, -61, -33];
    expect(solution(a)).toBe(6);
  });

  test("Test case 3", () => {
    const a = [1, 2, 3, 4, 5];
    expect(solution(a)).toBe(5);
  });

  test("Test case 4", () => {
    const a = [-5, -4, -3, -2, -1];
    expect(solution(a)).toBe(5);
  });
});
