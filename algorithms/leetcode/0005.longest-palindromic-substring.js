/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let longest = "";

  const findPalindrome = (str, i, j) => {
    while (i >= 0 && j < str.length && str[i] === str[j]) {
      i--;
      j++;
    }
    return str.slice(i + 1, j);
  };

  for (let i = 0; i < s.length; i++) {
    let a = findPalindrome(s, i, i);
    let b = findPalindrome(s, i, i + 1);
    const logerPalindrome = a.length > b.length ? a : b;
    if (logerPalindrome.length > longest.length) {
      longest = logerPalindrome;
    }
  }
  return longest;
};

export default longestPalindrome;
