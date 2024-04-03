/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  if (!nums.length) return [];
  const result = [];

  function dfs(i, subset) {
    if (i >= nums.length) {
      result.push([...subset]);
      return;
    }

    subset.push(nums[i]);
    dfs(i + 1, subset);
    subset.pop();
    dfs(i + 1, subset);
  }

  dfs(0, []);
  return result;
};

export default subsets;
