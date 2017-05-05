var express = require('express')
var hbs = require('express-handlebars')
var bodyParser = require('body-parser')
const routes = require('./routes')

//Create a custom function helper to check the status.

var app = express()


// Middleware
app.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs',
  helpers: {
        select: function ( selected, options) {
            return options.fn(this).replace(
            new RegExp(' value=\"' + selected + '\"'),
            '$& selected="selected"'); },
        bar: function () { return 'BAR!'; }
    }
}))




app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))


app.use('/', routes)

module.exports = app
