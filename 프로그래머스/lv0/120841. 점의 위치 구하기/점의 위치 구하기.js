function solution(dot) {
    // 모두 양수면 1 , [음,양] 2 , [음,음] 3, [양,음] 4
    if(dot[0]>0 && dot[1]>0) return 1;
    else if(dot[0]<0 && dot[1]>0) return 2;
    else if(dot[0]<0 && dot[1]<0) return 3;
    else return 4;
}


/*
    function solution(dot) {
    const [num,num2] = dot;
    const check = num * num2 > 0;  //둘다 음인경우, 둘다 양인경우
    return num > 0 ? (check ? 1 : 4) : (check ? 3 : 2);
     // num > 0 인경우 1(check) , 4(check 아님)
}
=> 비구조화할당!

*/