function solution(scores) {
  let rank = 1;
  const target = scores[0];
  const targetScore = target[0] + target[1];

  scores.sort((a, b) => b[0] - a[0] || a[1] - b[1]);

  let maxSecondScore = -1;
  for (const score of scores) {
    if (target[0] < score[0] && target[1] < score[1]) {
      return -1;
    }

    if (maxSecondScore <= score[1] && targetScore < score[0] + score[1]) {
      rank += 1;
      maxSecondScore = score[1];
    }
  }
  return rank;
}

export default solution;
