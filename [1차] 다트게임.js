function solution(dartResult) {
    const round = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    const result = [];
    for (let i = 0; i<dartResult.length; i++) {
        let num = dartResult[i];
        if (num === '1' && dartResult[i+1] === '0') {
            num = '10';
        }
        if (num === '0' && round.includes(dartResult[i-1])) {
            continue;
        }
        
        if (round.includes(num)) {
            const bonus = num === '10' ? dartResult[i+2] : dartResult[i+1];
            const opt = num === '10' ? dartResult[i+3] : dartResult[i+2];
            switch (bonus) {
                case 'S':
                    result.push(Number(num));
                    break;
                case 'D':
                    result.push(Number(Math.pow(num, 2)));
                    break;
                case 'T':
                    result.push(Number(Math.pow(num, 3)));
            }
            
            switch (opt) {
                case '*':
                    if (result.length > 1) {
                        const end1 = result.pop();
                        const end2 = result.pop();
                        result.push(end2 * 2);
                        result.push(end1 * 2); 
                    } else {
                        const end3 = result.pop();
                        result.push(end3 * 2);
                    }
 
                    break;
                case '#':
                    const temp = result.pop();
                    result.push(temp * -1);
                    break;
            }
        }
    }
    let count = 0;
    for (value of result) {
        count += value;
    }
    return count;
}