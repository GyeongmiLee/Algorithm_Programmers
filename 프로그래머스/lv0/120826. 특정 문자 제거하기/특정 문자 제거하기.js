function solution(my_string, letter) {
    //문자열에서 letter filter로 걸러내기
    var answer = '';
    return my_string.split("").filter(e => e !== letter).join("")
}
/*
function solution(my_string, letter) {
    return my_string.replaceAll(letter, "");
}
+ split(letter)이렇게 구분자로 해서 풀수도 있다!
*/