function solution(num_list) {
    // 배열이 들어오고 배열 요소 filter로 거르기
    let hol = 0;
    let zzak = 0;
    num_list.filter(el => el % 2 === 0 ? zzak++ : hol++ )
    var answer = [zzak, hol];
    return answer;
}