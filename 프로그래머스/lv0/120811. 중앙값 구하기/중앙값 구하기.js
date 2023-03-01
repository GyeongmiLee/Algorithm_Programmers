function solution(array) {
    var answer = 0;
    let ad = 0;
    //sort 오름차순 정리
    array.sort((a,b)=> a-b);
    ad = Math.floor(array.length / 2);
    return array[ad]
}