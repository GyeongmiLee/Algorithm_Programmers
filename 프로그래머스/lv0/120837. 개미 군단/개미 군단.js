function solution(hp) {
    // 장군 5 / 병정 3/ 일 1 , 최소한의 병력 구해야함
    // 23이면 5로 먼저 나누고(4) , 나머지 값을 또 3으로 구해보고 나머지 일에 ++
    // console.log(23 / 5 / )
    let jang = Math.floor(hp / 5); // 장군
    let byung = Math.floor(hp % 5 / 3); // 병정
    let il = hp - (jang * 5 + byung * 3)
    // hp = jang * 5 + byung * 3 + ?(il)이니까
    // hp - (jang * 5 + byung * 3) = ?  
    return jang + byung + il; 
}