function solution(n) {
    //피자조각 = 7
    //n%!==0 Math.ceil(n/7)올림!
    var answer = 0;
    answer = n % 7 !== 0 ? Math.ceil(n/7) : n/7
    return answer;
    
    // 생각해보니
    // return Math.ceil(n / 7) 이렇게 해주면 끝남...
}