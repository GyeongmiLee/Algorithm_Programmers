function solution(age) {
    // age 문자열로 변환해서 자르고, 
    // 반복문 돌려서 각 인덱스번호
    let pro_age = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]; //index 필요
    let age_str = age.toString().split("") // 100
    let ind = 0;
    var answer = '';
    for(let i = 0; i < age_str.length ; i++){
            ind = age_str[i]; 
            answer += pro_age[ind]; 
    }    
    return answer;
}