// function solution(emergency) {
//     let prev_arr = [...emergency] //원래 배열 [3, 76, 24] => 2 3 1 
//     var answer = [];
//     emergency.sort((a,b) => b-a); //이러면 내림차순으로 정렬(emergency에 담김) // [76, 24, 3] => 3 2 1
    
//     // indexOf로 원래배열에서 위치 찾기
//     // console.log(prev_arr.indexOf(24))
//     emergency.map((el) =>{
//                 // return  
//         // answer.push(prev_arr.indexOf(el)+1)
//         console.log(prev_arr.indexOf(el))
//     });
//     // return answer;
// }

function solution(emergency) {
    let sorted = emergency.slice().sort((a,b)=>b-a);
    return emergency.map(v=>sorted.indexOf(v)+1);
}