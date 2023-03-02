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