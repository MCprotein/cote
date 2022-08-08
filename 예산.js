function solution(d, budget) {
  const sortedD = d.sort((a, b) => a - b);
  console.log(sortedD);
  let total = budget;
  let result = 0;
  for (let i = 0; i < d.length; i++) {
    if (total - sortedD[i] >= 0) {
      total -= sortedD[i];
      result += 1;
    }
  }
  return result;
}
