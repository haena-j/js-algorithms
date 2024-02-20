/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map();

  for (let num of nums) {
    map.set(num, map.has(num) ? map.get(num) + 1 : 1);
  }

  return [...map]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((n) => n[0]);
};

export default topKFrequent;

// Bucket Sort
// var topKFrequent = function(nums, k) {
//     const freqMap = new Map();

//     for (let num of nums) {
//         freqMap.set(num, (freqMap.get(num) || 0) + 1);
//     }

//     const bucket = Array.from({ length: nums.length + 1 }, () => []);
//     for (let [key, value] of freqMap) {
//         bucket[value].push(key);
//     }

//     const result = [];
//     for (let i = bucket.length - 1; i > 0 && result.length < k; i--) {
//         if (bucket[i].length) {
//             result.push(...bucket[i]);
//         }
//     }

//     return result.slice(0, k);
// };
