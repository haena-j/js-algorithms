import solution from "../../algorithms/programmers/178870";

describe("Programmers 178870 Test", () => {
  test("Test case 1", () => {
    const sequence = [1, 2, 3, 4, 5];
    const k = 7;
    expect(solution(sequence, k)).toEqual([2, 3]);
  });

  test("Test case 2", () => {
    const sequence = [1, 1, 1, 2, 3, 4, 5];
    const k = 5;
    expect(solution(sequence, k)).toEqual([6, 6]);
  });

  test("Test case 3", () => {
    const sequence = [2, 2, 2, 2, 2];
    const k = 6;
    expect(solution(sequence, k)).toEqual([0, 2]);
  });

  test("Test case 4", () => {
    const sequence = [1, 2, 3, 4, 5];
    const k = 5;
    expect(solution(sequence, k)).toEqual([4, 4]);
  });
});
