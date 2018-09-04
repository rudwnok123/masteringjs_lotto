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
    "PRICE" : 1000
    , "MIN_NUM" : 1
    , "MAX_NUM" : 45
    , "COUNT_LIMIT" : 6
    , "FIRST_PLACE_PRICE" : 2000000000
    , "SECOND_PLACE_PRICE" : 1500000
    , "THIRD_PLACE_PRICE" : 50000
    , "FOURTH_PLACE_PRICE" : 5000
}

function buyLottos(money) {
    const count = money / LOTTO.PRICE;
    console.log("로또 " + count + "개를 발행했습니다.");

    return assignNumbers(count);
}

function assignNumbers(count) {
    const lottoBuyArr = [];
    // count는 (money / LOTTO.PRICE) 한 값으로 정수값이여서 for를 사용했습니다.
    // 배열이 아닌데 forEach나 map을 사용할 수 있는 방법이 있나요? 생각이 닿지를 않습니다..
    for(let i=0; i<count; i++) {
        const myLottoNumbersSet = new Set();
        while(myLottoNumbersSet.size < LOTTO.COUNT_LIMIT) {
            myLottoNumbersSet.add(Math.floor(Math.random() * LOTTO.MAX_NUM) + LOTTO.MIN_NUM);
        }
        lottoBuyArr.push(myLottoNumbersSet);
    }
    return lottoBuyArr;
}

function setLuckyNumbers(luckyNumberArr) {
    // 리뷰 보고 배열 대신 객체를 사용해 의미 있는 이름을 써보려 했는데
    // 의미 있는 이름을 사용할 경우 소스 구조상 분기가 필요한거 같고..
    // LOTTO[1] 이런식으로 쓰자니 배열 사용하는 것과 다른게 없는거 같아서요.
    // 접근을 잘 못하고 있다면 지도 부탁드립니다.
    const winCountArr = [0, 0, 0, 0, 0, 0];
    lottoBuyArr.forEach((myLottoNumbersSet) => {
        let count = 0;
        luckyNumberArr.forEach((luckyNumbers) => {
            if(myLottoNumbersSet.has(luckyNumbers)) count++;
        });
        winCountArr[count - 1] += 1;
    });
    announceLotto(winCountArr);
}

function announceLotto(winCountArr) {
    console.log("3개 일치 ( " + LOTTO.FOURTH_PLACE_PRICE + "원 )- " + winCountArr[2] + "개");
    console.log("4개 일치 ( " + LOTTO.THIRD_PLACE_PRICE + "원 )- " + winCountArr[3] + "개");
    console.log("5개 일치 ( " + LOTTO.SECOND_PLACE_PRICE + "원 )- " + winCountArr[4] + "개");
    console.log("6개 일치 ( " + LOTTO.FIRST_PLACE_PRICE + "원 )- " + winCountArr[5] + "개");
}

const lottoBuyArr = buyLottos(1000000);
setLuckyNumbers([5, 26, 7, 12, 9, 30]);