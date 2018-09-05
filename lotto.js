// 로또 1장의 가격은 1000원이다.
// 돈을 넣으면 살 수 있는 만큼 로또를 구매할 수 있다. (buyLottos 함수)
// 각 로또 번호는 6개다.
// > buyLottos(14000); 
// > 로또 14개를 발행했습니다.
// [8, 21, 23, 41, 42, 43]
// [3, 5, 11, 16, 32, 38]
// [7, 11, 16, 35, 36, 44]
// [1, 8, 11, 31, 41, 42]
// [13, 14, 16, 38, 42, 45]
// [7, 11, 30, 40, 42, 43]
// [2, 13, 22, 32, 38, 45]
// [23, 25, 33, 36, 39, 41]
// [1, 3, 5, 14, 22, 45]
// [5, 9, 38, 41, 43, 44]
// [2, 8, 9, 18, 19, 21]
// [13, 14, 18, 21, 23, 35]
// [17, 21, 29, 37, 42, 45]
// [3, 8, 27, 30, 35, 44]
// > setLuckyNumbers([1, 2, 3, 4, 5, 6]);

// > 당첨 통계
// ---------
// 3개 일치 (5000원)- 1개
// 4개 일치 (50000원)- 0개
// 5개 일치 (1500000원)- 0개
// 6개 일치 (2000000000원)- 0개
const LOTTO = {
    "PRICE" : 1000,
    "MIN_NUM" : 1,
    "MAX_NUM" : 45,
    "COUNT_LIMIT" : 6,
    "PRIZES" : { 
        "FIRST" : 2000000000,
        "SECOND" : 1500000,
        "THIRD" : 50000,
        "FOURTH" : 5000
    }
}
const winningCountList = { 
    "3" : 0,
    "4" : 0,
    "5" : 0,
    "6" : 0
}

function buyLottos(money) {
    const count = money / LOTTO.PRICE;
    console.log("로또 " + count + "개를 발행했습니다.");

    return assignNumbers(count);
}

function assignNumbers(count) {
    const lottoBuyingList = [];
    for(let i=0; i<count; i++) {
        const myLottoNumbersSet = new Set();
        while(myLottoNumbersSet.size < LOTTO.COUNT_LIMIT) {
            myLottoNumbersSet.add(getLottoNumber());
        }
        lottoBuyingList.push(myLottoNumbersSet);
    }
    return lottoBuyingList;
}

function getLottoNumber() {
    return Math.floor(Math.random() * LOTTO.MAX_NUM) + LOTTO.MIN_NUM;
}

function setLuckyNumbers(luckyNumberList) {
    lottoBuyingList.forEach((myLottoNumbersSet) => {
        let count = 0;
        luckyNumberList.forEach((luckyNumber) => {
            if(myLottoNumbersSet.has(luckyNumber)) count++;
        });
        winningCountList[count]++;
    });
    announceLotto(winningCountList);
}

function announceLotto(winningCountList) {
    console.log("3개 일치 ( " + LOTTO.PRIZES.FOURTH + "원 )- " + winningCountList[3] + "개");
    console.log("4개 일치 ( " + LOTTO.PRIZES.THIRD + "원 )- " + winningCountList[4] + "개");
    console.log("5개 일치 ( " + LOTTO.PRIZES.SECOND + "원 )- " + winningCountList[5] + "개");
    console.log("6개 일치 ( " + LOTTO.PRIZES.FIRST + "원 )- " + winningCountList[6] + "개");
}

const lottoBuyingList = buyLottos(1000000);
setLuckyNumbers([5, 26, 7, 12, 9, 30]);