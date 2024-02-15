/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const map = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    map[s.charCodeAt(i) - 97]++;
  }

  for (let i = 0; i < t.length; i++) {
    map[t.charCodeAt(i) - 97]--;
  }
  return map.every((value) => value === 0);
};

export default isAnagram;
