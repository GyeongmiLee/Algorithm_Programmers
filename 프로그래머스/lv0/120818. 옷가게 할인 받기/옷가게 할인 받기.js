function solution(price) {
    if(price >= 500000){
        return Math.floor(price * 0.8)
    }
    else if(price >= 300000){
        return Math.floor(price * 0.9)
    }
    else if(price >= 100000){
        return Math.floor(price * 0.95)
    }
    return price;
}
/* 인상깊었던 풀이
const discounts = [
    [500000, 20],
    [300000, 10],
    [100000,  5],
]

const solution = (price) => {
    for (const discount of discounts)
        if (price >= discount[0])
            return Math.floor(price - price * discount[1] / 100)
    return price
}

*/