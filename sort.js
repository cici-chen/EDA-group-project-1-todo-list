const data = require('./data.json')

sortPrioirity = (data) => {
  let high = filterPriority(data, 'High')
  let medium = filterPriority(data, 'Medium')
  let low = filterPriority(data, 'Low')
  console.log({high, medium, low});
  let sorted = high.concat(medium.concat(low))
  console.log({sorted});
}

filterPriority = (data, priority) => {
  return data.filter((item) => {
    return item.priority == priority
  })
}


sortPrioirity(data) //this is just to run an example, delete this for final version - Harrisan-san

module.exports = {
  sortPrioirity
}
