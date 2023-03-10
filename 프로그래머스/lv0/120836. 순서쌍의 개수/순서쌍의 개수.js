function solution(n) {
    let count = 0;
    // for문돌려서 a*b곱했을때 n이 나오는경우
    for(let i =1; i <= n ; i++){
        for(let j = 1; j <= n; j++){
            if(i * j === n){
                count ++;
            }
        }
    }
    return count;
}