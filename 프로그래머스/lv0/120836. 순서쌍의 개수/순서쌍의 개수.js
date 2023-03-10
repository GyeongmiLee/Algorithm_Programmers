// function solution(n) {
//     let count = 1; // 무조건 한번은 있으니까(i = 2)
//     // for문돌려서 a*b곱했을때 n이 나오는경우
//     for(let i =2; i <= n ; i++){
//         for(let j = 1; j <= n; j++){
//             if(i * j === n){
//                 count ++;
//             }
//         }
//     }
//     return count;
// }

function solution(n) {    
    let factors = [];
    
    for(let i = 1; i <= n; i++){
        if(n % i === 0){
            factors.push(i);
        }
    }
    
    return factors.length;
}