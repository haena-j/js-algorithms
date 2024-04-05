function solution(land) {
  let n = land.length;
  let m = land[0].length;
  let oilAmount = new Array(m).fill(0);
  let visited = Array.from(Array(n), () => Array(m).fill(false));
  let directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  function dfs(x, y) {
    visited[x][y] = true;
    let stack = [[x, y]];
    let size = 1;
    let columns = new Set([y]);

    while (stack.length > 0) {
      let [cx, cy] = stack.pop();
      for (let [dx, dy] of directions) {
        let nx = cx + dx,
          ny = cy + dy;
        if (nx < 0 || nx >= n || ny < 0 || ny >= m || land[nx][ny] === 0 || visited[nx][ny])
          continue;

        visited[nx][ny] = true;
        stack.push([nx, ny]);
        size++;
        columns.add(ny);
      }
    }

    columns.forEach((col) => {
      oilAmount[col] += size;
    });
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (land[i][j] === 1 && !visited[i][j]) {
        dfs(i, j);
      }
    }
  }

  return Math.max(...oilAmount);
}

export default solution;
