/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 === 1) return false;

  const stack = [];
  const pairs = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let char of s) {
    if (pairs[char]) {
      stack.push(pairs[char]);
    } else if (stack.pop() !== char) {
      return false;
    }
  }

  return stack.length === 0;
};

export default isValid;
