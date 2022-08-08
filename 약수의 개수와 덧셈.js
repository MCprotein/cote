function solution(left, right) {
  let count = 0;
  for (let i = left; i <= right; i++) {
    let divisors = [];
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        divisors.push(i / j);
        divisors.push(j);
      }
    }
    divisors = [...new Set(divisors)].sort((a, b) => a - b);
    if (divisors.length % 2 === 0) {
      count += i;
    } else {
      count -= i;
    }
  }
  return count;
}
