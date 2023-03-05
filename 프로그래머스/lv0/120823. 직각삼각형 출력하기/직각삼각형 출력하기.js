const readline = require('readline');
// node.js환경에서 사용할 수 있는 readline 모듈 사용하여 입력 받아와서 처리하는 예제. => 모듈 가져오기
const rl = readline.createInterface({
    //rl 변수에 생성된 인터페이스를 저장
    input: process.stdin, //입력스트림, 여기에 n이 들어옴
    output: process.stdout //출력스트림
});
// node.js에서의 readline.Interface 객체는 입력스트림과 출력스트림에 대한 인터페이스 제공!!
let input = [];
rl.on('line', function (line) {
    //한줄씩 입력받은 후 실행, 입력된 값은 line에 저장
    //n이 3이라면 line에는 3이 저장
    input = line.split(' '); //input에는 ['3'] 이렇게 저장
    // console.log(input)
}).on('close', function () {
    //readline인터페이스가 종료될때 발생하는 이벤트, input[0] 첫번째 요소를 출력
    const num = Number(input[0])
    let answer = '';
    for(let i = 0; i < num; i++){
        for(let j = 0; j <= i ; j++){
            answer += '*';
        }
        answer += `\n`
    }
    console.log(answer)
});

/*
  for(let i = 1; i < n + 1; i++) {
        console.log('*'.repeat(i));
        repear()은 반복시!
    }

*/