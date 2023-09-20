import solution from "../../algorithms/programmers/12920";

describe("Programmers 12920 Test", () => {
  test("Test case 1", () => {
    const N = 6;
    const cores = [1, 2, 3];
    expect(solution(N, cores)).toBe(2);
  });

  test("Test case 2", () => {
    const N = 7;
    const cores = [1, 2, 3];
    expect(solution(N, cores)).toBe(1);
  });

  test("Test case 3", () => {
    const N = 20;
    const cores = [2, 1, 5, 2, 3, 1];
    expect(solution(N, cores)).toBe(2);
  });

  test("Test case 4", () => {
    const N = 49999;
    const cores = [2, 1, 5];
    expect(solution(N, cores)).toBe(2);
  });
});
