function solution(N, number) {
  const cache = Array.from({ length: 10 }, () => new Set());

  for (let i = 1; i < 9; i++) {
    cache[i].add(Number(N.toString().repeat(i)));

    for (let j = 1; j < i; j++) {
      for (let arg1 of cache[j]) {
        for (let arg2 of cache[i - j]) {
          cache[i].add(arg1 + arg2);
          cache[i].add(arg1 - arg2);
          cache[i].add(arg1 * arg2);
          cache[i].add(Math.floor(arg1 / arg2));
        }
      }
    }

    if (cache[i].has(number)) return i;
  }

  return -1;
}

export default solution;
