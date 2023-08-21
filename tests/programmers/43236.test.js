import solution from "../../algorithms/programmers/43236";

test("Test case 1", () => {
  const distance = 25;
  const rocks = [2, 14, 11, 21, 17];
  const n = 2;
  expect(solution(distance, rocks, n)).toBe(4);
});

test("Test case 2", () => {
  const distance = 10;
  const rocks = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const n = 3;
  expect(solution(distance, rocks, n)).toBe(1);
});

test("Test case 3", () => {
  const distance = 16;
  const rocks = [4, 8, 11];
  const n = 2;
  expect(solution(distance, rocks, n)).toBe(8);
});

test("Test case 4", () => {
  const distance = 25;
  const rocks = [2, 14, 11, 21, 17];
  const n = 10;
  expect(solution(distance, rocks, n)).toBe(25);
});
