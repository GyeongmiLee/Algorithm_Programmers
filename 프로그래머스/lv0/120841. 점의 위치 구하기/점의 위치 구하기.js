function solution(dot) {
    // 모두 양수면 1 , [음,양] 2 , [음,음] 3, [양,음] 4
    if(dot[0]>0 && dot[1]>0) return 1;
    else if(dot[0]<0 && dot[1]>0) return 2;
    else if(dot[0]<0 && dot[1]<0) return 3;
    else return 4;
}