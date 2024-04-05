function solution(info, edges) {
  const graph = Array.from(Array(info.length), () => []);
  edges.forEach(([from, to]) => {
    graph[from].push(to);
  });

  let maxSheep = 0;
  function dfs(targetNode, sheepCnt, wolfCnt, path = []) {
    if (info[targetNode] === 0) sheepCnt++;
    else wolfCnt++;

    if (sheepCnt <= wolfCnt) return;

    maxSheep = Math.max(maxSheep, sheepCnt);

    const newPath = [...path.filter((n) => n !== targetNode), ...graph[targetNode]];
    newPath.forEach((node) => {
      dfs(node, sheepCnt, wolfCnt, newPath);
    });
  }

  dfs(0, 0, 0, [0]);

  return maxSheep;
}

export default solution;
