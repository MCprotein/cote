function solution(absolutes, signs) {
    let count = 0;
    for (let i = 0; i<signs.length; i++) {
        if (signs[i]) {
            count += absolutes[i];
        } else {
            count -= absolutes[i];
        }
    }
    return count;
}