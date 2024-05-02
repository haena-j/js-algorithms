/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const result = [];
  const n = nums.length;
  nums.sort((a, b) => a - b);

  function backtracking(start, path) {
    result.push(path.slice());

    for (let i = start; i < n; i++) {
      if (i > start && nums[i] === nums[i - 1]) continue;

      path.push(nums[i]);
      backtracking(i + 1, path);
      path.pop();
    }
  }

  backtracking(0, []);

  return result;
};

export default subsetsWithDup;
