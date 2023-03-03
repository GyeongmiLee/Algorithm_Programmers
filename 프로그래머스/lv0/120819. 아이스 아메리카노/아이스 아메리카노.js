function solution(money) {
    //money / 5500 값과, 15000-첫번째값*5500
    let americano = 5500;
    let first = parseInt(money / americano);
    let second = money - (first * americano);
    return [first, second]
}