function solution(numbers) {
    var answer = [];
    answer = numbers.map((e) => e * 2);
    return answer;
    
    //function solution(numbers) {
    // return numbers.reduce((a, b) => [...a, b * 2], []);
    /*
    - 배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);
    - reduce() 메서드는 배열의 각 요소에 대해 콜백함수 실행, 
    콜백함수의 반환값이 다음 값이 됨!     
    
    - return값의 첫번째 인자: 값들 펼쳐주고, ...a는 배열을 새로 생성하는게 아니라 이전값을 변경하고자 할때 유용하다(첫번째 인자가 누적값이기 때문에 ...a 해주는거다~~!), 근데 이거 메모리 잡아먹는단다! 
    - 두번쨰 인자: 현재값 * 2
    
    */
// }
}