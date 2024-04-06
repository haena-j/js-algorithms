import solution from "../../algorithms/programmers/154539";

describe("Programmers 154539 Test", () => {
  test("Test case 1", () => {
    const numbers = [2, 3, 3, 5];
    expect(solution(numbers)).toEqual([3, 5, 5, -1]);
  });

  test("Test case 2", () => {
    const numbers = [9, 1, 5, 3, 6, 2];
    expect(solution(numbers)).toEqual([-1, 5, 6, 6, -1, -1]);
  });

  test("Test case 3", () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    expect(solution(numbers)).toEqual([2, 3, 4, 5, 6, -1]);
  });
});
