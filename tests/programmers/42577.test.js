import solution from "../../algorithms/programmers/42577";

describe("Programmers 42577 Test", () => {
  test("Test case 1", () => {
    const phone_book = ["119", "97674223", "1195524421"];
    expect(solution(phone_book)).toBe(false);
  });

  test("Test case 2", () => {
    const phone_book = ["123", "456", "789"];
    expect(solution(phone_book)).toBe(true);
  });

  test("Test case 3", () => {
    const phone_book = ["12", "123", "1235", "567", "88"];
    expect(solution(phone_book)).toBe(false);
  });

  test("Test case 4", () => {
    const phone_book = ["567", "123", "0", "57", "88"];
    expect(solution(phone_book)).toBe(true);
  });
});
