/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1 || numRows >= s.length) return s;

  const rows = new Array(numRows).fill("");
  let row = 0;
  let step = 1;

  for (const char of s) {
    rows[row] += char;
    row += step;

    if (row === 0 || row === numRows - 1) {
      step *= -1;
    }
  }

  return rows.join("");
};

export default convert;
