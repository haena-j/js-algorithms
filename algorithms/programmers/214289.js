function solution(temperature, t1, t2, a, b, onboard) {
  const MAX = Number.MAX_SAFE_INTEGER;
  const tempDiff = temperature > t2 ? temperature - t2 : t1 - temperature;
  const totalTimes = onboard.length;

  let dp = Array.from({ length: totalTimes }, () =>
    Array(tempDiff + 2).fill(MAX)
  );
  dp[0][tempDiff + 1] = 0;

  for (let time = 1; time < totalTimes; time++) {
    for (let temp = 0; temp < tempDiff + 2; temp++) {
      if (onboard[time] === 1 && temp > 1) {
        dp[time][temp] = MAX;
        continue;
      }

      const costOptions = [dp[time - 1][temp] + b]; // 에어컨을 키고 현재 온도를 유지하는 경우

      if (temp <= tempDiff) {
        costOptions.push(dp[time - 1][temp + 1] + a); // 에어컨을 키고 온도를 1도 감소 시키는 경우
      }
      if (temp > 0) {
        costOptions.push(dp[time - 1][temp - 1]); // 에어컨을 끄고 온도가 자연적으로 1도 증가하는 경우
      }
      if (temp === tempDiff + 1) {
        costOptions.push(dp[time - 1][temp]); // 에어컨을 끄고 온도를 유지하는 경우 (실내온도 == 실외온도인 경우)
      }

      dp[time][temp] = Math.min(...costOptions);
    }
  }
  return Math.min(...dp[totalTimes - 1]);
}

export default solution;
