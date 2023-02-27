function solution(num1, num2) {
    let num3 = check(num1);
    let num4 = check(num2);
    let answer = num3 + num4
    return answer;
}

function check(num){
    if(-50000 <= num && num <= 50000) {
        return num;
    }
}