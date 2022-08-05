function solution(arr, divisor) {
    const result = [];
    for (value of arr) {
        if (value % divisor === 0) {
            result.push(value);
        }
    }
    if (result.length === 0) {
        result.push(-1);
        return result;
    }
    const sortedResult = result.sort((a, b) => a-b);
    return sortedResult;
    
}