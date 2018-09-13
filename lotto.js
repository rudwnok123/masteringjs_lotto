// ---------------------
// 전역 선언
// ---------------------
// 로또 당첨 번호
var luckyNumber = [1, 2, 3, 4, 5, 6];


// ---------------------
// M
// ---------------------

// luckyNumber = [];

function setLuckyNumber(...luckyNumber) {
  // console.log(luckyNumber,'당첨 번호');
}

  
// 로또 번호.length
var lottoNumlength = 6;
let benefit = [];
let benefitReward;
var benefitMoney = '';

let buyLottos = (price) => {
  let count = price / 1000;
  console.log("로또 갯수", count);

  // 로또 배열 생성기
  multiArray = new Array(count);
  for (let i = 0; i < multiArray.length; i++) {
    multiArray[i] = new Array();
  }
  // 로또 생성기
  for (let i = 0; i < lottoNumlength; i++) {
    for (let j = 0; j < count; j++) {
      let randomNum = Math.floor(Math.random() * 10 + 1);
      multiArray[j].push(randomNum);
    }
  }
  // 로또 배열 반환?
  let resultRandomNum = () => {
    multiArray.forEach((element) => {
      // console.log(element, 'foreach문으로 돌리기 (배열 내부 보기)', i);
      for (let j = 0; j < lottoNumlength; j++) {
        // console.log(element[j],'한개씩 보이기');
        // console.log(luckyNumber[j], '당첨 번호 한개씩 보이기');
        //여기서 비교하자
        if (element[j] == luckyNumber[j]) {
          let a = element[j];
          // console.log('당첩 번호 (ㅊㅊ)',a);
          benefit.push(a);

          console.log(benefit, benefit.length + '개 당첨');
          if (benefit.length == '3') {
            benefitMoney = 5000;
            console.log('5000원 당첨');
            // console.log('누적금액',benefitMoney);
          }
          else if (benefit.length == '4') {
            benefitMoney = 50000;
            console.log('50000원 당첨');
            // console.log('누적금액',benefitMoney);
          }
          else if (benefit.length == '5') {
            benefitMoney = 1500000;
            console.log('1500000원 당첨');
            // console.log('누적금액',benefitMoney);
          }
          else if (benefit.length == '6') {
            benefitMoney = 2000000000;
            console.log('2000000000원 당첨');
            // console.log('누적금액',benefitMoney);
          }
        }
      }
      // return element;
    });
    let resultMoney = benefitMoney / price * 100;
    console.log(`수익률은 ${resultMoney}% 입니다`)
    // console.log('입금한 돈',price);
  }
  //비교하기
  // resultRandomNum();
  resultRandomNum();
  // console.log(element[i]);
  // console.log(...luckyNumber);



};

// ---------------------
// C
// ---------------------
buyLottos(3000);

