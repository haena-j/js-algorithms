/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  const sLen = s.length;
  const pLen = p.length;

  const recursivePatternMatch = (i, j) => {
    if (i >= sLen && j >= pLen) return true;
    if (j >= pLen) return false;

    const match = i < sLen && (s[i] === p[j] || p[j] === ".");

    if (j + 1 < pLen && p[j + 1] === "*") {
      return recursivePatternMatch(i, j + 2) || (match && recursivePatternMatch(i + 1, j));
    } else if (match) {
      return recursivePatternMatch(i + 1, j + 1);
    }

    return false;
  };

  return recursivePatternMatch(0, 0);
};

export default isMatch;

// var isMatch = function (s, p) {
//   const sLen = s.length;
//   const pLen = p.length;
//   const dp = Array(sLen + 1).fill(false).map(() => Array(pLen + 1).fill(false));

//   dp[0][0] = true;

//   for (let j = 1; j <= pLen; j++) {
//     if (p[j - 1] === '*') {
//       dp[0][j] = dp[0][j - 2];
//     }
//   }

//   for (let i = 1; i <= sLen; i++) {
//     for (let j = 1; j <= pLen; j++) {
//       if (p[j - 1] === s[i - 1] || p[j - 1] === '.') {
//         dp[i][j] = dp[i - 1][j - 1];
//       } else if (p[j - 1] === '*') {
//         dp[i][j] = dp[i][j - 2] || (dp[i - 1][j] && (s[i - 1] === p[j - 2] || p[j - 2] === '.'));
//       }
//     }
//   }

//   return dp[sLen][pLen];
//  };
