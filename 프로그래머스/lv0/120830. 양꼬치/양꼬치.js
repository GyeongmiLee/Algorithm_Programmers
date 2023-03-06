function solution(n, k) {
    // N: 양꼬치 K: 음료수, 10인분 먹으면 음료수 하나 서비스
    // 10이 넘으면 n / 10 = service
    // n * 12000 + k * 2000 
    // 넘으면 n * 12000 + k * 2000 - service * 2000
    
    return n >= 10 ? n * 12000 + k * 2000 - parseInt(n / 10) * 2000 : n * 12000 + k * 2000 
}