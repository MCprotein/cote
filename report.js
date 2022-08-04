function solution(id_list, rawReport, k) {
    console.log([...new Set(rawReport)]); // 인자로 들어온 배열 중복제거

    // 원래 중복제거 과정
    const jsonReport = rawReport.map(JSON.stringify);
    const setReport = new Set(jsonReport);
    // const report = Array.from(setReport, JSON.parse);
    const report = [...setReport];

    const result = {};
    const eachReport = {};
    const reportNum = {};
    
    let newReport = report.map(e => e.split(" "));
    console.log(newReport);

    console.log('중복제거', newReport);
    console.log(newReport[0][1])
    for (let i=0; i<report.length; i++) {
        if (reportNum[newReport[i][1]]) {
            reportNum[newReport[i][1]] += 1;
        } else {
             reportNum[newReport[i][1]] = 1;
        }
    }
    for (let i=0; i<report.length; i++) {
        if (eachReport[newReport[i][0]]) {
            eachReport[newReport[i][0]].push(newReport[i][1]);
        } else {
            eachReport[newReport[i][0]] = [];
            eachReport[newReport[i][0]].push(newReport[i][1]);
        }
        if (reportNum[newReport[i][1]] >= k) {
            if (result[newReport[i][0]]) {
                result[newReport[i][0]] += 1;
            } else {
                result[newReport[i][0]] = 1;
            }
        }
    }
    const keys = [];
    const arr = [];
    for (key in result) {
        keys.push(key);
    }
    for (id of id_list) {
        if (keys.includes(id)) {
            arr.push(result[id]);
        } else {
            arr.push(0);
        }
    }
    return arr
    
}

solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3)