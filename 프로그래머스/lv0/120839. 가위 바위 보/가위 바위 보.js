function solution(rsp) {
    // 가위: 2 바위: 0 보: 5
    // 2 => 0 / 0 =>5 / 5 => 2 
    // split으로 나눈담에~ forEach + 삼항연산자
    let answer = '';
    (rsp.split("")).forEach(a => {answer += a === "2" ? "0" : a === "0" ? "5": "2"})
    return answer;
}

/*
function solution(rsp) {
    let arr = {
        2: 0,
        0: 5,
        5: 2
    };
    var answer = [...rsp].map(v => arr[v]).join("");
    return answer;
}


*/