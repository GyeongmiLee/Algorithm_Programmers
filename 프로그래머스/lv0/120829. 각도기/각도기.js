function solution(angle) {
    // var answer = 0;
    // return answer;
    if(angle < 90){
        return 1;
    }
    else if(angle === 90){
        return 2;
    }
    else if(angle < 180){
        return 3;
    }
    else {
        return 4;
    }
}
/*
function solution(angle) {
    return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
}
*/