function solution(balls, share) {
    //balls : 구슬 개수 3 , share: 나눠줄 구슬 개수 2 
    let answer = 0
    let fac = (num) => {
        if(num === 0){
            return 1
        }else{
            return num * fac(num-1);
        }
    }
    answer = fac(balls) / (fac(balls - share) * fac(share));
    return Math.round(answer) // https://joooing.tistory.com/entry/Javascript-%EC%86%8C%EC%88%98%EC%A0%90floating-point-%EA%B3%84%EC%82%B0-%EC%98%A4%EB%A5%98
}

