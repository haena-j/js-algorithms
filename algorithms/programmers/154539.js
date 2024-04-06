function solution(numbers) {
  const len = numbers.length;
  const result = new Array(len).fill(-1);
  const stack = [0];

  for (let i = 1; i < len; i++) {
    while (stack.length && numbers[i] > numbers[stack[stack.length - 1]]) {
      const index = stack.pop();
      result[index] = numbers[i];
    }
    stack.push(i);
  }

  return result;
}

export default solution;
