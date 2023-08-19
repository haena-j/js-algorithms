function solution(a) {
  const n = a.length;
  let answer = 2;
  let left = a[0];
  let right = a[n - 1];
  for (let i = 1; i < n - 1; i++) {
    if (left > a[i]) {
      left = a[i];
      answer++;
    }
    if (right > a[n - 1 - i]) {
      right = a[n - 1 - i];
      answer++;
    }
  }
  return right == left ? answer - 1 : answer;
}

export default solution;
