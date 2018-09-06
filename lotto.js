// ---------------------
// 전역 선언
// ---------------------
// 로또 당첨 번호
var luckyNumber = [1,2,3,4,5,6];
// 로또 번호.length
var lottoNumlength = 6;

// ---------------------
// M
// ---------------------
luckyNumber = [];
function setLuckyNumber(...luckyNumber){
  // console.log(luckyNumber);
}
setLuckyNumber(luckyNumber);

// setLuckyNumber = (...luckyNumber)=>{
//   console.log(luckyNumber);
// }


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
      var randomNum = Math.floor(Math.random() * 100 + 1);
      multiArray[j].push(randomNum);
    }
  }
  console.log(...luckyNumber);
  
  multiArray.forEach((element,i) => {
    console.log(element,'foreach문',i);
  });
};

// ---------------------
// C
// ---------------------
buyLottos(2000);



// ---------------------
// V
// ---------------------
let _result = () => { };
