'use strict'

const express = require('express')
const app = express()
const chatCat = require('./app/index')

app.set('port', process.env.PORT || 3000)
//app.set('views', './views')
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.use('/', chatCat.router)

app.listen(app.get('port'), () => {
    console.log("ChatCAT Running on Port: ", app.get('port'))
})