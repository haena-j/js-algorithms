/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length < 1) return 0;

  const sortedNums = nums.sort((a, b) => a - b);
  let max = 1,
    current = 1;

  for (let i = 1; i < sortedNums.length; i++) {
    if (sortedNums[i] === sortedNums[i - 1]) continue;

    if (sortedNums[i] - sortedNums[i - 1] === 1) {
      current++;
    } else {
      max = Math.max(max, current);
      current = 1;
    }
  }

  return Math.max(max, current);
};

export default longestConsecutive;

// var longestConsecutive = function (nums) {
//   const set = new Set(nums);
//   let max = 0;

//   for (let n of set) {
//     if (!set.has(n - 1)) {
//       let length = 0;
//       while (set.has(n + length)) {
//         length++;
//       }
//       max = Math.max(length, max);
//     }
//   }
//   return max;
// };
