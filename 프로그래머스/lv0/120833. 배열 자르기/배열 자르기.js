function solution(numbers, num1, num2) {
    // for문 돌려서 시작점이 num1 , 돌리는포인트가 num2
    var answer = [];
    for(let i = num1; i <= num2; i++){
        answer.push(numbers[i])
    }
    return answer;
}