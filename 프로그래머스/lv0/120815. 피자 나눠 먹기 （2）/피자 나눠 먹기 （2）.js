function solution(n) {
    // n % 6 ===0 이 되게 만들어야!
    // 최소공배수 / 6이 answer
    /*
    1. 최대공약수 구함(for문)
    2. 최소공배수 최대공약수 * 나머지 곱셈들 
    3. answer = 최소공배수 / 6
    */
    let min = 0; //최대공약수
    var answer = 0;
    let max = 0; //최소공배수
    for(let i= 0; i <= n; i++){
        if(n%i===0 && 6%i===0){
            min = i;
        }
    }
    max = (6 * n) / min
    answer = max / 6;
    return answer;
}

/*
const solution = (n) => {
// 피자조각 6개 초기화
    let piece = 6
// 일단 냅다 while문 돌게
    while(true) {
    // 최소공배수일때만 break걸것임
        if (piece % n === 0) {
            break
        }
        // 안걸리면 계속 6의 배수로!!
        piece += 6
    }
//마지막엔 다시 6으로 나눠주기!
    return piece / 6
}


*/