function solution(n) {
    // forof문 + filter 짝수만 저장하고, reduce로 합산?
    let arr = [];
   for(let i = 0; i <= n ; i++){
       if(i % 2 === 0){
           arr.push(i)
       }
   }
    return arr.reduce((a,b)=> a+b);
}

/*
       for(let i=2 ; i<=n ; i+=2)
        answer += i; 이렇게 반복횟수 줄일 수 있음

*/