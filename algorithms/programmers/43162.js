function solution(n, computers) {
  const isVisited = new Array(n).fill(false);
  let numNetworkGroups = 0;

  for (let i = 0; i < n; i++) {
    if (!isVisited[i]) {
      numNetworkGroups++;
      dfs(i);
    }
  }

  function dfs(i) {
    isVisited[i] = true;
    for (let candidateIdx = 0; candidateIdx < n; candidateIdx++) {
      if (computers[i][candidateIdx] && !isVisited[candidateIdx]) {
        dfs(candidateIdx);
      }
    }
  }

  return numNetworkGroups;
}

export default solution;
