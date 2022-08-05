function solution(strings, n) {
    const word = {};
    for (let i = 0; i<strings.length; i++) {
        if (word[strings[i][n]]) {
            word[strings[i][n]].push(strings[i]);
        } else {
        word[strings[i][n]] = [];
        word[strings[i][n]].push(strings[i]);
        }

    }
    // console.log(word);
    const one = [];
    for (key in word) {
        one.push(key);
    }
    const sortedOne = one.sort();
    // console.log(one);
    const temp = [];
    for (let i = 0; i<sortedOne.length; i++) {
        temp.push(word[sortedOne[i]]);
    }
    // console.log(temp)
    const result = [];
    for (let i = 0; i<temp.length; i++) {
        if (temp[i].length !== 1) {
            const temp2 = temp[i].sort();
            console.log('temp2', temp2)
            result.push(temp2);
        } else {
            result.push(temp[i]);
        }
    }
    // console.log(result.flat());
    return result.flat();
}