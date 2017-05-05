const express = require('express')
const router = express.Router()
var funcs = require('./functions')
var data = require('./data.json')

router.get('/', (req, res) => {
  res.render('home', {data})
})

router.get('/other', (req, res) => {
  res.render('other')
})

router.post('/', (req, res) => {
  var newId = data.length + 1
  var newObj = {
    "id": newId,
    "task": req.body.newTask,
    "priority": "Medium",
    "status": "New"
  }
  funcs.addTask(newObj)
  res.redirect('/')
})

router.get('/delete/:id', (req, res) => {
  var deleteId=req.params.id
  var itemToDelete = data.find(function(item){
    return item.id == deleteId
  })
  var indexToDelete = data.indexOf(itemToDelete)
  data.splice((indexToDelete),1)
  res.redirect('/')
})

router.get('/edit/:id', (req, res) => {
  var editId = req.params.id
  var itemToEdit = data.find(function(item){
    return item.id == editId
  })
  res.render('edit', itemToEdit)
})

router.post('/edit/:id', (req, res) => {
  var editId = req.params.id
  var itemToEdit = data.find(function(item){
    return item.id == editId
  })
  for (key in req.body) {
    itemToEdit[key] = req.body[key]
  }
  res.redirect('/')
})
module.exports = router
