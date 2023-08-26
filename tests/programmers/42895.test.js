import solution from "../../algorithms/programmers/42895";

describe("Programmers 42895 Test", () => {
  test("Test case 1", () => {
    const N = 5;
    const number = 12;
    expect(solution(N, number)).toBe(4);
  });

  test("Test case 2", () => {
    const N = 2;
    const number = 11;
    expect(solution(N, number)).toBe(3);
  });

  test("Test case 3", () => {
    const N = 5;
    const number = 5;
    expect(solution(N, number)).toBe(1);
  });

  test("Test case 4", () => {
    const N = 5;
    const number = 55555;
    expect(solution(N, number)).toBe(5);
  });

  test("Test case 5", () => {
    const N = 1;
    const number = 1121;
    expect(solution(N, number)).toBe(7);
  });
});
