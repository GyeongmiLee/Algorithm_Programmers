// function solution(denum1, num1, denum2, num2) {
//     //denum: 분모, num: 분자
//     // 분자
//     let topNum = num1*denum2 + num2*denum1
//     // 분모
//     let botNum = num1*num2
//     // 최대 공약수
//     let maximum = 1
//     // 약분
//     for(let i = 1 ; i <= topNum ; i ++) {
//         if(topNum%i === 0 && botNum%i === 0) {
//             maximum = i
//         }
//     }
//     return [topNum/maximum, botNum/maximum]
// }


function fnGCD(a, b){
    return (a%b)? fnGCD(b, a%b) : b;
    // 8 % 10 = 2 / 10 % 2 = 0
    // 29 % 6 = 5 / 6 % 5 = 1 / 6 % 1 = 0
}

function solution(denum1, num1, denum2, num2) {
    let num = denum1*num2 + denum2*num1; //분자 29
    let denum = num1 * num2; //분모 6
    let gcd = fnGCD(num, denum); //최대공약수
    return [num/gcd, denum/gcd];
}



