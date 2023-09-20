function solution(n, cores) {
  const coreCount = cores.length;

  if (n <= coreCount) {
    return n;
  }

  let minTime = 0;
  let maxTime = n * Math.min(...cores);

  // 최소 작업시간 찾기
  while (minTime < maxTime) {
    const midTime = Math.floor((minTime + maxTime) / 2);
    let completedTasks = 0;

    for (let i = 0; i < coreCount; i++) {
      completedTasks += Math.floor(midTime / cores[i]) + 1;
    }

    if (completedTasks >= n) {
      maxTime = midTime;
    } else {
      minTime = midTime + 1;
    }
  }

  // 찾은 시간에서 남은 작업을 할당하고 마지막 작업을 처리하는 코어 번호를 반환
  let remainingTasks = n;

  for (let i = 0; i < coreCount; i++) {
    remainingTasks -= Math.floor((minTime - 1) / cores[i]) + 1;
  }

  for (let i = 0; i < coreCount; i++) {
    if (minTime % cores[i] === 0) {
      remainingTasks--;
    }
    if (remainingTasks === 0) {
      return i + 1;
    }
  }
}

export default solution;
