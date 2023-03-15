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

/*

function solution(num_list, n) {
    var answer = [];

    while(num_list.length) {
        answer.push(num_list.splice(0,n));
    //원본배열이 계속 삭제되니까 0번째부터 n번째까지 push 가능!
    }

    return answer;
}

 - 주목해야할 점
 => slice: 원본배열을 그대로 보존해야하는 상황
    slice(시작인덱스, 종료인덱스 전 인덱스)
 => splice: 원본배열 건드림
    splice(시작인덱스, 몇개의 값을 삭제할지, 추가할 값)
    
    https://www.daleseo.com/js-array-slice-splice/
*/