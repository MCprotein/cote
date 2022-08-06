function solution(n) {
    const ternary = [];
    let num = n;
    while (1) {
        const quotient = Math.floor(num / 3);
        const remainder = Math.floor(num % 3);
        
        if (quotient ===0 && remainder === 0) {
            break;
        } else {
            ternary.push(remainder);
            num = quotient;
        }
    }
    let count = 0;
    for (let i = 0; i<ternary.length; i++) {
        count += ternary[i] * Math.pow(3, ternary.length-i-1);
    }
    return count;
}