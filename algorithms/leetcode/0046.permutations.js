/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];

  function backtracking(arr) {
    if (arr.length === nums.length) {
      result.push(Array.from(arr));
    }

    for (let i = 0; i < nums.length; i++) {
      if (arr.includes(nums[i])) continue;

      arr.push(nums[i]);
      backtracking(arr);
      arr.pop();
    }
  }

  backtracking([]);
  return result;
};

export default permute;
