function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  let queue = [[0, 0, 1]];

  // 방문 초기화
  maps[0][0] = 0;

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  while (queue.length) {
    const [x, y, cnt] = queue.shift();

    if (x === n - 1 && y === m - 1) {
      return cnt;
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= n || ny >= m || !maps[nx][ny]) {
        continue;
      }
      queue.push([nx, ny, cnt + 1]);
      maps[nx][ny] = 0;
    }
  }

  return -1;
}

export default solution;
