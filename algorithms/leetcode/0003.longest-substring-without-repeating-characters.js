/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let n = s.length;
  if (n < 2) return n;

  let result = 0;
  let charSet = new Set();
  let i = 0,
    j = 0;

  while (i < n && j < n) {
    if (!charSet.has(s[j])) {
      charSet.add(s[j++]);
      result = Math.max(result, j - i);
    } else {
      charSet.delete(s[i++]);
    }
  }

  return result;
};

export default lengthOfLongestSubstring;
