/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const sets = new Set(nums);
  return sets.size !== nums.length;
};

export default containsDuplicate;
