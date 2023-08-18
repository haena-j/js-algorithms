import solution from "../../algorithms/programmers/152995";

test("solution function exists", () => {
  expect(typeof solution).toBe("function");
});

test("Test case 1", () => {
  const scores = [
    [2, 2],
    [1, 4],
    [3, 2],
    [3, 2],
    [2, 1],
  ];
  expect(solution(scores)).toBe(4);
});

test("Test case 2", () => {
  const scores = [
    [5, 5],
    [4, 6],
    [6, 4],
    [3, 3],
    [2, 2],
    [1, 1],
  ];
  expect(solution(scores)).toBe(1);
});

test("Test case 3", () => {
  const scores = [
    [2, 3],
    [2, 4],
    [6, 2],
    [5, 1],
    [2, 1],
  ];
  expect(solution(scores)).toBe(3);
});

test("Test case 4", () => {
  const scores = [
    [4, 1],
    [2, 4],
    [3, 5],
  ];
  expect(solution(scores)).toBe(2);
});
