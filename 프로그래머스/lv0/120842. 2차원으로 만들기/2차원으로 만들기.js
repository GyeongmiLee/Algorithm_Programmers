function solution(num_list, n) {
    // [1,2,3,4,5,6,7,8]
    const answer = []
    // const로 객체글 생성했을때 객체 값은 변경 가능!
    for(let i =0; i< num_list.length; ){ //0 , 1
        const sliceN = [] //생성 
        for(let j=0; j < n; j++){ //0
            sliceN.push(num_list[i]); //[1,2][]
            i++ //2
            console.log(i)
        }
        answer.push(sliceN)//[[1,2]]
    }
    return answer;
}