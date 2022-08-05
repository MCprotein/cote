function solution(numbers) {
    let count = 0;
    numbers.forEach(e => count+=e);
    return 45 - count;
}