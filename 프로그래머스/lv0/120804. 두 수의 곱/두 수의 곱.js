function solution(num1, num2) {
    const hasValid = (num) => {
        0 <= num && num <= 100 
        return num;}
    let answer = hasValid(num1) * hasValid(num2);
    return answer;
}