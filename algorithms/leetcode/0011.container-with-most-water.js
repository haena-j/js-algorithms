/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0,
    right = height.length - 1;
  let max = 0;

  while (left < right) {
    const min = Math.min(height[left], height[right]);
    max = Math.max(min * (right - left), max);
    if (min === height[left]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
};

export default maxArea;
