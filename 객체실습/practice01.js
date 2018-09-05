const obj = {
  debug: 'on',
  window: {
    title: 'Sample Konfabulator Widget',
    name: 'main_window',
    width: 500,
    height: 500,
  },
  image: {
    src: 'Images/Sun.png',
    name: 'sun1',
    hOffset: 250,
    vOffset: 250,
    alignment: 'center',
  },
  text: {
    data: 'Click Here',
    size: 36,
    style: 'bold',
    name: 'text1',
    hOffset: 250,
    vOffset: 100,
    alignment: 'center',
    onMouseUp: 'sun1.opacity = (sun1.opacity / 100) * 90;',
    custom: {
      isCustom: 'true',
      customValue: 10000,
    },
  },
}

const makeArrayThatHasNumberValueFromObj = obj => {
  const result = []

  const recursivelyFind = obj => {
    for (let i in obj) {
      if (typeof obj[i] === 'object') {
        recursivelyFind(obj[i])
      }
      if (typeof obj[i] === 'number') {
        result.push(i)
      }
    }
  }
  recursivelyFind(obj)

  console.log(result)
  return result
}

makeArrayThatHasNumberValueFromObj(obj)
