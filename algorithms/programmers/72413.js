function solution(n, s, a, b, fares) {
  const INF = Infinity;
  const dist = Array.from({ length: n + 1 }, () => []);

  for (const [c, d, f] of fares) {
    dist[c].push([d, f]);
    dist[d].push([c, f]);
  }

  const findFares = (start) => {
    const queue = [start];
    const fares = new Array(n + 1).fill(Infinity);
    fares[start] = 0;

    while (queue.length) {
      const c = queue.shift();
      if (!dist[c]) continue;

      for (const [d, f] of dist[c]) {
        if (fares[d] > fares[c] + f) {
          fares[d] = fares[c] + f;
          queue.push(d);
        }
      }
    }
    return fares;
  };

  const S = findFares(s);
  const A = findFares(a);
  const B = findFares(b);

  let minFare = INF;
  for (let i = 0; i <= n; i++) {
    minFare = Math.min(minFare, S[i] + A[i] + B[i]);
  }

  return minFare;
}

export default solution;
