function solution(price, money, count) {
  const need = price * ((count * (count + 1)) / 2);
  return need > money ? need - money : 0;
}
