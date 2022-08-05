function solution(n) {
    let answer = 0;
    const arr = new Array(n+1).fill(true);
    const end = Math.sqrt(n);
    
    for (let i = 2; i<end+1; i++) {
        if (arr[i]) {
            for (let j = i*2 ; j<n+1; j=j+i) {
                arr[j] = false;
            }
        }
    }
    
    for (let m = 2; m<n+1; m++) {
        if (arr[m]) answer++;
    }
    
    return answer;
    
}

// let answer = 0;
// const arr = new Array(n+1).fill(true); // 초깃값 설정
// const end = Math.sqrt(n) 

// for(let i = 2; i <= end; ++i){
//     // 이미 소수가 아닌 인덱스는 건너뛴다.
//     if(arr[i] === false){
//         continue; 
//     }
//     // 소수가 아닌 데이터는 false로 입력한다.
//     for(let k = 2 * i; k <= n; k += i){
//         arr[k] = false;
//     }
// }
// // 소수의 갯수를 구한다.
// for(let i = 2; i <= n; ++i){
//     if(arr[i] === true){
//         answer++;
//     }
// }
// return answer;

solution(10)