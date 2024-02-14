/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if (x < 0) return -reverse(-x);

  let rev = 0;
  while (x > 0) {
    const digit = x % 10;
    rev = rev * 10 + digit;
    x = Math.floor(x / 10);
  }

  // Constraints
  if (rev > Math.pow(2, 31)) return 0;

  return rev;
};

export default reverse;
