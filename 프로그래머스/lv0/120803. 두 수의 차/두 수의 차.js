function solution(num1, num2) {
    const hasValid = (num) => {
        -50000 <= num && num <= 50000 
        return num;};
    let answer = hasValid(num1) - hasValid(num2);
    return answer;
}