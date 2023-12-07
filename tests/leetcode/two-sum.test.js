import solution from "../../algorithms/leetcode/two-sum";

describe("LeetCode Two Sum Test", () => {
  test("Test case 1", () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    expect(solution(nums, target)).toEqual([0, 1]);
  });

  test("Test case 2", () => {
    const nums = [3, 2, 4];
    const target = 6;
    expect(solution(nums, target)).toEqual([1, 2]);
  });

  test("Test case 3", () => {
    const nums = [3, 3];
    const target = 6;
    expect(solution(nums, target)).toEqual([0, 1]);
  });

  test("Test case 4", () => {
    const nums = [3, 2, 3];
    const target = 6;
    expect(solution(nums, target)).toEqual([0, 2]);
  });

  test("Test case 5", () => {
    const nums = [123, 444, 789, 101112];
    const target = 567;
    expect(solution(nums, target)).toEqual([0, 1]);
  });

  test("Test case 6", () => {
    const nums = [-3, 4, 3, 90];
    const target = 0;
    expect(solution(nums, target)).toEqual([0, 2]);
  });
});
