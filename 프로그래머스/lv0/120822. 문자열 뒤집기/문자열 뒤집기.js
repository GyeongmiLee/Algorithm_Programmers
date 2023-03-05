function solution(my_string) {
    // split()함수: 문자열을 분할하는 함수, 특정 구분자를 기준으로 문자열을 나누어 배열로 반환
    // join()함수: 배열의 모든 요소를 연결하여 하나의 문자열을 만든다.이때, 각 요소는 구분자로 구분됨.
    let new_arr = my_string.split("").reverse().join("");
    return new_arr
     // var answer = [...my_string].reverse().join("");
    //spread문법 써도 됨!!
}