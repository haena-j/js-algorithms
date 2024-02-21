/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  for (let r = 0; r < 9; r++) {
    let row = new Set(),
      col = new Set(),
      subBox = new Set();
    for (let c = 0; c < 9; c++) {
      let currRow = board[r][c];
      let currCol = board[c][r];
      let currBox = board[3 * Math.floor(r / 3) + Math.floor(c / 3)][3 * (r % 3) + (c % 3)];

      if (currRow !== ".") {
        if (row.has(currRow)) return false;
        row.add(currRow);
      }

      if (currCol !== ".") {
        if (col.has(currCol)) return false;
        col.add(currCol);
      }

      if (currBox !== ".") {
        if (subBox.has(currBox)) return false;
        subBox.add(currBox);
      }
    }
  }
  return true;
};

export default isValidSudoku;

// var isValidSudoku = function (board) {
//     const rows = [], cols = [], subBoxes = [];
//     for (let i = 0; i < 9; i++) {
//         rows.push(new Set());
//         cols.push(new Set());
//         subBoxes.push(new Set());
//     }

//     for (let r = 0; r < 9; r++) {
//         for (let c = 0; c < 9; c++) {
//             if (board[r][c] === '.') continue;

//             if (rows[r].has(board[r][c]) ||
//                 cols[c].has(board[r][c]) ||
//                 subBoxes[Math.floor(r / 3) * 3 + Math.floor(c / 3)].has(board[r][c])) {
//                 return false;
//             }

//             rows[r].add(board[r][c]);
//             cols[c].add(board[r][c]);
//             subBoxes[Math.floor(r / 3) * 3 + Math.floor(c / 3)].add(board[r][c]);
//         }
//     }
//     return true;
// };
