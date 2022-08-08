function solution(sizes) {
  let s = [];
  let l = [];

  for (size of sizes) {
    if (size[0] > size[1]) {
      l.push(size[0]);
      s.push(size[1]);
    } else {
      l.push(size[1]);
      s.push(size[0]);
    }
  }

  s = s.sort((a, b) => b - a);
  l = l.sort((a, b) => b - a);

  return s[0] * l[0];
}
