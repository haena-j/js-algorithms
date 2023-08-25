function solution(n, roads, sources, destination) {
  const INF = Infinity;
  const graph = Array.from({ length: n + 1 }, () => []);
  for (const [a, b] of roads) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const queue = [destination];
  const time = new Array(n + 1).fill(INF);
  time[destination] = 0;

  while (queue.length) {
    const cur = queue.shift();
    const curTime = time[cur];

    for (const next of graph[cur]) {
      if (time[next] > curTime + 1) {
        time[next] = curTime + 1;
        queue.push(next);
      }
    }
  }

  return sources.map((source) => (time[source] < INF ? time[source] : -1));
}

export default solution;
