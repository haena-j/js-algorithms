/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = [];

  dfs(0, target, []);
  function dfs(i, target, list) {
    if (i >= candidates.length || target < 0) {
      return;
    }
    if (target === 0) {
      result.push([...list]);
      return;
    }

    list.push(candidates[i]);
    dfs(i, target - candidates[i], list);
    list.pop();
    dfs(i + 1, target, list);
  }

  return result;
};

export default combinationSum;
