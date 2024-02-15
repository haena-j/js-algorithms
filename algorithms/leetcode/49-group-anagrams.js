/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const groups = new Map();

  for (let str of strs) {
    const groupStr = getGroupStr(str);
    if (!groups.has(groupStr)) {
      groups.set(groupStr, [str]);
    } else {
      groups.get(groupStr).push(str);
    }
  }

  return [...groups.values()];
};

const getGroupStr = (str) => {
  const count = new Array(26).fill(0);

  for (const char of str) {
    count[char.charCodeAt(0) - 97]++;
  }

  return count
    .reduce((acc, cur, i) => {
      if (cur > 0) {
        acc.push(`${i}-${cur}`);
      }
      return acc;
    }, [])
    .join(",");
};

export default groupAnagrams;

// var groupAnagrams = function (strs) {
//   let map = new Map();
//   for (let str of strs) {
//     let x = str.split("").sort().join("");
//     let y = map.has(x) ? [...map.get(x), str] : [str];
//     map.set(x, y);
//   }
//   return [...map.values()];
// };
