const data = require('./data.json')

function addTask(task) {
  

  data.push(task)
  return data
}

// addTask({"id":4, "task": "Wash clothes", "priority":"Low", "status": "New" })
module.exports = {
  addTask
}
