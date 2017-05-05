var test = require('tape')
var funcs = require('../functions')
var request = require('supertest')
var cheerio = require('cheerio')

var app = require('../server')

test('test that tests work', (t) => {
  t.pass()
  t.end()
})

test('Add object to data correctly', (t) => {
  var newTask = {"id":4, "task": "Wash clothes", "priority":"Low", "status": "New" }
  var actual = funcs.addTask(newTask)

  t.equal(actual.length, 5, 'data length is correct')
  t.end()
})

test('test for cream', (t) => {
  request(app)
    .get('/edit/1')
    .end((err, res) => {
      var $ = cheerio.load(res.text)
      t.equal($('h1').text(), 'Cream', 'title is Cream')
      t.end()
    })
})
