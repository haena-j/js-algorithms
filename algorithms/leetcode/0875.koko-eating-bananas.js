/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let left = 1;
  let right = Math.max(...piles);

  if (h === piles.length) {
    return right;
  }

  while (left <= right) {
    const k = Math.floor((left + right) / 2);
    const hours = piles.reduce((acc, pile) => acc + Math.ceil(pile / k), 0);

    if (hours <= h) {
      right = k - 1;
    } else {
      left = k + 1;
    }
  }

  return left;
};

export default minEatingSpeed;
