function solution(numbers, k) {
    // for문 돌때 2개씩 증가하도록 짜고
    // 배열의 길이가 넘어갈땐 (numbers[i]가) => 나머지 연산자 사용
    let cnt = 1; // cnt가 k와 같아질때 반복문 멈추게 하면됨
    for(let i = 0; ;i += 2){ // 언제 멈출지는 if문으로!
        // 가운데 식 안쓸거면 저런식으로 비워둬야함!!!!
        i %= numbers.length;
        const item = numbers[i];
        if(cnt === k){
            return item;
        }
        cnt+=1;  
    }
}