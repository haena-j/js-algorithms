function solution(n, wires) {
  let minDiff = n;
  const graph = Array.from(Array(n + 1), () => []);

  wires.forEach(([v1, v2]) => {
    graph[v1].push(v2);
    graph[v2].push(v1);
  });

  wires.forEach(([v1, v2]) => {
    const visited = new Array(n + 1).fill(false);
    visited[v2] = true;
    const count = dfs(v1, visited);
    minDiff = Math.min(minDiff, Math.abs(count - (n - count)));
  });

  function dfs(node, visited) {
    visited[node] = true;
    let count = 1;

    graph[node].forEach((next) => {
      if (!visited[next]) {
        count += dfs(next, visited);
      }
    });

    return count;
  }

  return minDiff;
}

export default solution;
