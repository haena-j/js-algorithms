import solution from "../../algorithms/programmers/214289";

test("Test case 1", () => {
  const temperature = 28;
  const t1 = 18;
  const t2 = 26;
  const a = 10;
  const b = 8;
  const onboard = [0, 0, 1, 1, 1, 1, 1];
  expect(solution(temperature, t1, t2, a, b, onboard)).toBe(40);
});

test("Test case 2", () => {
  const temperature = -10;
  const t1 = -5;
  const t2 = 5;
  const a = 5;
  const b = 5;
  const onboard = [0, 0, 0, 0, 0, 1, 0];
  expect(solution(temperature, t1, t2, a, b, onboard)).toBe(25);
});

test("Test case 3", () => {
  const temperature = 11;
  const t1 = 8;
  const t2 = 10;
  const a = 10;
  const b = 1;
  const onboard = [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1];
  expect(solution(temperature, t1, t2, a, b, onboard)).toBe(20);
});

test("Test case 4", () => {
  const temperature = 11;
  const t1 = 8;
  const t2 = 10;
  const a = 10;
  const b = 100;
  const onboard = [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1];
  expect(solution(temperature, t1, t2, a, b, onboard)).toBe(60);
});
