const data = require('./data/practice02')

const getPersonWhoWorksInCompany = (data, type) => {
  const result = []

  const recursiveFind = (data, type) => {
    for (let { type, name, childnode } of data) {
      if (Array.isArray(childnode)) {
        recursiveFind(childnode)
      }
      if (type === 'sk') {
        result.push(name)
      }
    }
  }

  recursiveFind(data)
  console.log(result)
  return result
}

getPersonWhoWorksInCompany(data, 'sk')
