function solution(distance, rocks, n) {
  rocks.sort((a, b) => a - b);
  // 마지막 돌 distance를 추가해줌
  rocks.push(distance);

  // 이분 탐색을 위한 변수 설정. left는 0, right는 도착지점까지의 거리로 초기화한다.
  let left = 0,
    right = distance;
  let answer = 0;

  while (left <= right) {
    // 중앙값 설정
    let mid = Math.floor((left + right) / 2);
    // 이전 바위 위치를 저장
    let prev = 0;
    // 제거한 바위의 수를 저장
    let removed = 0;

    // 바위들을 순회하며 최소 거리를 확인
    for (const rock of rocks) {
      // 현재 바위와 이전 바위 사이의 거리
      const distance = rock - prev;
      // 거리가 중앙값보다 작으면 바위를 제거
      if (distance < mid) {
        if (++removed > n) break;
      } else {
        // 이전 바위 위치를 현재 바위로 업데이트
        prev = rock;
      }
    }

    // 제거한 바위의 수가 n보다 크면 중앙값을 줄여서 다시 탐색
    if (removed > n) {
      right = mid - 1;
    } else {
      // 제거한 바위의 수가 n 이하면 최소 거리를 업데이트하고 중앙값을 늘려서 다시 탐색
      answer = mid;
      left = mid + 1;
    }
  }
  return answer;
}

export default solution;
