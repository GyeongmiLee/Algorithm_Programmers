function solution(my_string, n) {
    //각 문자를 n만큼 반복하게
    //split으로 나눠서 배열에 담고 for문 한번 더 돌려서(repaet써서 다시담기)
    //string 개수만큼 for문 돌려서 answer에 repeat\
    var answer = '';
    for(let i = 0; i < my_string.length; i++){
        answer += my_string[i].repeat(n)
    }
    return answer;
}
/*
function solution(my_string, n) {
    var answer = [...my_string].map(v => v.repeat(n)).join("");
    console.log(answer);
    return answer;
}

*/