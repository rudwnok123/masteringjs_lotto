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
// > setLuckyNumber([1, 2, 3, 4, 5, 6]);

// > 당첨 통계
// ---------
// 3개 일치 (5000원)- 1개
// 4개 일치 (50000원)- 0개
// 5개 일치 (1500000원)- 0개
// 6개 일치 (2000000000원)- 0개

const lottoBuyArr = buyLottos(14000);
setLuckyNumber([13, 21, 14, 18, 23, 35]);

function buyLottos(money) {
    const count = money / 1000;
    console.log("로또 14개를 발행했습니다.");

    return assignNumbers(count);
}

function assignNumbers(count) {
    const lottoBuyArr = [];
    for(let i=0; i<count; i++) {
        const myLottoNumbersSet = new Set();
        while(myLottoNumbersSet.size < 6) {
            myLottoNumbersSet.add(Math.floor(Math.random() * 45) + 1);
        }
        lottoBuyArr.push(myLottoNumbersSet);
    }

    return lottoBuyArr;
}

function setLuckyNumber(luckyNumberArr) {
    const winCountArr = [0, 0, 0, 0, 0, 0];
    lottoBuyArr.forEach((myLottoNumbersSet) => {
        let count = 0;
        luckyNumberArr.forEach((luckyNumber) => {
            if(myLottoNumbersSet.has(luckyNumber)) count++;
        });
        winCountArr[count - 1] += 1;
    });
    announceLotto(winCountArr);
}

function announceLotto(winCountArr) {
    console.log("3개 일치 (5000원)- " + winCountArr[2] + "개");
    console.log("4개 일치 (50000원)- " + winCountArr[3] + "개");
    console.log("5개 일치 (1500000원)- " + winCountArr[4] + "개");
    console.log("6개 일치 (2000000000원)- " + winCountArr[5] + "개");
}
