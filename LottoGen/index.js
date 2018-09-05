const Utils = {
  swap(array, index1, index2) {
    const temp = array[index1]
    array[index1] = array[index2]
    array[index2] = temp
    return array
  },
  shuffle(array) {
    array.forEach((v, i) => {
      let j = Math.floor(Math.random() * i)
      array = Utils.swap(array, i, j)
    })
    return array
  },
  koreanizeCurrency(number) {
    const nubmerArray = number
      .toString()
      .split('')
      .reverse()

    nubmerArray.forEach((digit, i) => {
      if (i !== 0 && i % 3 === 0) {
        nubmerArray[i] = digit + ','
      }
    })

    return nubmerArray.reverse().join('') + '원'
  },
}

const Lotto = (() => {
  const LOTTO_PRICE = 1000,
    PERCENTAGE = 100,
    PRIZE_AND_MATCH_NUMBER_COUNT = {
      3: { prize: 5000, count: 0 },
      4: { prize: 50000, count: 0 },
      5: { prize: 150000, count: 0 },
      6: { prize: 2000000000, count: 0 },
    },
    publishedLottos = []

  let moneyBought = 0

  const getIterableCount = () => Math.floor(moneyBought / LOTTO_PRICE)

  const setMoneyBought = money => {
    moneyBought = money
  }

  const generateNumber = (min = 1, max = 45) => {
    const candidates = []
    while (max >= min) {
      candidates.push(max)
      max--
    }
    return Utils.shuffle(candidates).splice(0, 6)
  }

  const setPublishedLottos = iterableCount => {
    while (iterableCount--) {
      publishedLottos.push(generateNumber())
    }
  }

  const getPublishedLottos = () => publishedLottos

  const printPublishedLottos = iterableCount => {
    console.log(``)
    console.log(`로또 ${iterableCount}개를 발행했습니다.`)
    publishedLottos.forEach(eachLotto => console.log(eachLotto))
    console.log(``)
  }

  const checkLottoNumber = winningNumber => {
    publishedLottos.forEach(eachCase => {
      const duplicationRemovedArray = new Set([...winningNumber, ...eachCase])
      const matchCount = eachCase.length + winningNumber.length - duplicationRemovedArray.size
      if (PRIZE_AND_MATCH_NUMBER_COUNT[matchCount] != null) {
        PRIZE_AND_MATCH_NUMBER_COUNT[matchCount].count++
      }
    })
  }

  const getEarningRate = () => {
    let earnedMoney = 0
    for (let i in PRIZE_AND_MATCH_NUMBER_COUNT) {
      const { prize, count } = PRIZE_AND_MATCH_NUMBER_COUNT[i]
      earnedMoney += count * prize
    }
    const earningRate = ((earnedMoney - moneyBought) / moneyBought) * PERCENTAGE
    return earningRate
  }

  const printStatistics = () => {
    console.log(`당첨 통계`)
    console.log(`----------`)
    for (let matches in PRIZE_AND_MATCH_NUMBER_COUNT) {
      if (PRIZE_AND_MATCH_NUMBER_COUNT.hasOwnProperty(matches)) {
        const { prize, count } = PRIZE_AND_MATCH_NUMBER_COUNT[matches]
        console.log(`${matches}개 일치(${Utils.koreanizeCurrency(prize)}) - ${count}개`)
      }
    }
    const earningRate = getEarningRate()
    console.log(`나의 수익률은 ${earningRate}% 입니다.`)
    console.log(``)
  }

  const Lotto = function() {}

  Lotto.prototype = {
    buyLotto(money) {
      const moneyBought = setMoneyBought(money)
      const iterableCount = getIterableCount()
      setPublishedLottos(iterableCount)
      printPublishedLottos(iterableCount)
    },
    setLuckyNumber(winningNumber) {
      const iterableCount = getIterableCount()
      checkLottoNumber(winningNumber)
      printStatistics()
    },
  }

  return Lotto
})()

const trial1 = new Lotto()
trial1.buyLotto(5000)
trial1.setLuckyNumber([1, 36, 9, 34, 30, 28])
