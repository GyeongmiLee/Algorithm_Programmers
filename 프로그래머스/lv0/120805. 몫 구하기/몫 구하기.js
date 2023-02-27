function solution(num1, num2) {
    const hasValid = (num) => {
        0 <= num && num <= 100 
        return num;}
    let answer = hasValid(num1) / hasValid(num2);
    return Math.floor(answer);
    //Math.floor() - 버림
    //Math.ceil() - 올림
    //Math.round() - 반올림
}
