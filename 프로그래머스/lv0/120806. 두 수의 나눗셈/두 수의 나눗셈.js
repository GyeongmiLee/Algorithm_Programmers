function solution(num1, num2) {
    const hasNum = (num) => {
        if(0 < num && num <= 100) return num;  
    }
    return parseInt(hasNum(num1) / hasNum(num2) *1000)
}