function solution(order) {
  let stack = [];
  let index = 0;
  let count = 0;

  for (let i = 1; i <= order.length; i++) {
    if (order[index] === i) {
      count++;
      index++;
      while (stack.length > 0 && stack[stack.length - 1] === order[index]) {
        stack.pop();
        count++;
        index++;
      }
    } else {
      stack.push(i);
    }
  }

  return count;
}

export default solution;
