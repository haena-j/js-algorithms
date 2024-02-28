/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let row = matrix.length;
  let col = matrix[0].length;
  let left = 0,
    right = row * col - 1;

  while (left <= right) {
    const mid = Math.floor((right + left) / 2);
    const midValue = matrix[Math.floor(mid / col)][mid % col];

    if (midValue === target) {
      return true;
    } else if (midValue > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
};

export default searchMatrix;

// var searchMatrix = function (matrix, target) {
//   let row = 0;
//   let col = matrix[0].length - 1;

//   while (row < matrix.length && col >= 0) {
//     if (matrix[row][col] === target) {
//       return true;
//     }
//     if (matrix[row][col] < target) {
//       row++;
//     } else {
//       col--;
//     }
//   }
//   return false;
// };
