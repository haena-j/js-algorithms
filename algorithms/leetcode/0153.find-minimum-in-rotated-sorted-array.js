/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[left] < nums[right]) {
      return nums[left];
    }

    const mid = Math.floor((left + right) / 2);

    if (nums[mid] >= nums[left]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return nums[left];
};

export default findMin;
