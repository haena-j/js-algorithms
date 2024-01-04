/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  const len = s.length;
  if (numRows > len || numRows < 2) return s;

  const rows = new Array(numRows).fill("");
  let isDown = true;
  let count = 0;

  for (let i = 0; i < len; i++) {
    rows[count] += s[i];
    isDown ? count++ : count--;

    if (count === numRows - 1 || count === 0) {
      isDown = !isDown;
    }
  }

  return rows.join("");
};

export default convert;
