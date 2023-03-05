function solution(my_string, letter) {
    //문자열에서 letter filter로 걸러내기
    var answer = '';
    return my_string.split("").filter(e => e !== letter).join("")
}