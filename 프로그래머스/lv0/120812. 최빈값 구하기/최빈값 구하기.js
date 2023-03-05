// function solution(array) {
//     let map = new Map();
    
//     // Map 객체 초기화
//     for(let i = 0; i <= Math.max(...array); i++){
//         // console.log(Math.max(...array))는 ...array중에 최대값산출
//         map.set(i, 0);    
//     }
    
//     // array 배열의 원소값과 일치하는 Map 객체의 key를 증가시킨다
//     for(let i = 0; i < array.length; i++){
//         map.set(array[i], map.get(array[i]) + 1);
//     }
    
//     // Map 객체의 value만 모아서 배열로 만든다
//     let arr = Array.from(map.values());
    
//     // 최대값 산출
//     let max = Math.max(...arr);
    
//     // 최대값이 하나만 있다면 max, 여러 개 중복된다면 -1 출력
//     if(arr.indexOf(max) !== arr.lastIndexOf(max)){
//         return -1;
//     } else {
//         return arr.indexOf(max);
//     }
// }

function solution(array) {
    // 123334
    /*  1.먼저 오름차순으로 정렬 , 최빈값 세기위해
        2.최빈값으로 지정할 변수 초기화(-1, 등장할수없는값)
            필요한 변수 : 최빈값, 최빈값빈도, 
        3.반복문 돌려서 arr.length만큼 확인하게
        4.배열 안 이전숫자 변수(다음 숫자로 넘어가는 경계임)
    */
    let sort_arr = array.sort((a,b)=> a-b);
    let i = 0; // 배열의 인덱스
    let choi = 0; //최빈값
    let choi_repeat = 0; //최빈값빈도(몇번 반복해서 된건지)
    let repeat_cnt = 0; //현재 똑같은 숫자가 몇번 등장했는지
    let before_num = -1; //이전넘버
    let isDupChoi = false;
    
    //1122인경우
    while(i < array.length){
        if(before_num !== array[i]){
            repeat_cnt = 1; //이전넘버와 같지않으면, 1로 초기화
        }else{
            repeat_cnt += 1; //같으면, +1
        }
        if(repeat_cnt === choi_repeat && choi !== array[i]){
            isDupChoi = true; // 조건 만족할때만 돌게끔
        }

        //최빈값이 바뀌는 순간
        if(repeat_cnt > choi_repeat){
            choi = array[i];
            choi_repeat = repeat_cnt;
            isDupChoi = false; //기본값 false로 바꿔주기
        }


        //이전num을 지금 arr[i]로 바꾸고
        before_num = array[i];
        //다하면 카운트 +1
        i +=1;
    }
    if(isDupChoi) return -1;
    return choi;
}