function solution(slice, n) {
    //n / slice => 값 if(n%slice!==0)+1
    var answer = 0;
    while(true){
        answer = parseInt(n / slice);
        if(n%slice !== 0){
           return answer+1;
            break;
        }else{
            return answer;
            break;
        }
    }
}

/*

function solution(slice, n) {
    return Math.ceil(n / slice)
}

그냥 올려버렸으면 됐다...
*/