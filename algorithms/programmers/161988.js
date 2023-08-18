function solution(sequence) {
  let k = 0;
  const { max, min } = sequence.reduce(
    (a, b, i) => {
      k = i % 2 === 0 ? k + b : k - b;
      a.max = Math.max(a.max, k);
      a.min = Math.min(a.min, k);

      return a;
    },
    { max: 0, min: 0 }
  );

  return max === min ? max : max - min;
}

export default solution;
