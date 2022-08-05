function solution(s) {
    const arr = s.split('');
    const small = [];
    const large = [];
    for (let i =0; i<arr.length; i++) {
        if (arr[i] === arr[i].toLowerCase()) {
            large.push(arr[i]);
        } else {
            small.push(arr[i]);
        }
    }
    const result1 = small.sort().reverse().join('');
    const result2 = large.sort().reverse().join('');
    return result2+result1;
}