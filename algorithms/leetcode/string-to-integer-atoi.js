/**
 * note: parseInt() is not allowed
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const MAX = 2147483647; // 2^31 - 1
  const MIN = -2147483648; // -2^31
  let i = 0;
  let sign = 1;
  let num = 0;

  s = s.trim();

  if (s[i] === "-" || s[i] === "+") {
    sign = s[i++] === "-" ? -1 : 1;
  }

  while (s[i] && s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
    num = num * 10 + (s.charCodeAt(i++) - 48);
  }

  num = sign * num;

  if (num > MAX) return MAX;
  if (num < MIN) return MIN;

  return num;
};

export default myAtoi;
