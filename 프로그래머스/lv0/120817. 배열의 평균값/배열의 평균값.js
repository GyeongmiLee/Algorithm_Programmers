// function solution(numbers) {
//     var answer = 0;
//     return answer;
// }
const solution = (numbers) =>{
    // forEach문 사용해서 합산한담에 나누기(length만큼)
   return (numbers.reduce((a,b)=>a+b))/numbers.length;
}