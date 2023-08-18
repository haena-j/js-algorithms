import solution from "../../algorithms/programmers/155651";

test("solution function exists", () => {
  expect(typeof solution).toBe("function");
});

test("solution test case", () => {
  const book_time1 = [
    ["15:00", "17:00"],
    ["16:40", "18:20"],
    ["14:20", "15:20"],
    ["14:10", "19:20"],
    ["18:20", "21:20"],
  ];
  expect(solution(book_time1)).toBe(3);

  const book_time2 = [
    ["09:10", "10:10"],
    ["10:20", "12:20"],
  ];
  expect(solution(book_time2)).toBe(1);

  const book_time3 = [
    ["10:20", "12:30"],
    ["10:20", "12:30"],
    ["10:20", "12:30"],
  ];
  expect(solution(book_time3)).toBe(3);
});

test("solution handles basic input", () => {
  const book_time = [
    ["10:00", "11:00"],
    ["12:00", "13:00"],
    ["13:10", "14:00"],
  ];
  expect(solution(book_time)).toBe(1);
});

test("solution handles overlapping bookings", () => {
  const book_time = [
    ["10:00", "11:00"],
    ["10:50", "11:30"],
    ["11:40", "12:30"],
    ["12:00", "13:00"],
  ];
  expect(solution(book_time)).toBe(2);
});
