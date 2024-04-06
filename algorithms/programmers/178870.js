function solution(sequence, k) {
  let result = [-1, -1];
  let left = 0,
    right = 0;
  let minLength = sequence.length;

  let sum = sequence[left];
  while (right < sequence.length) {
    if (sum < k) {
      sum += sequence[++right];
    } else {
      if (sum === k && right - left < minLength) {
        minLength = right - left;
        result = [left, right];
      }
      sum -= sequence[left++];
    }
  }

  return result;
}

export default solution;
