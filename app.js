const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const port = 3000
const mongoose = require('mongoose')
const db = mongoose.connection
mongoose.connect('mongodb://localhost/expense-tracker', { useNewUrlParser: true, useUnifiedTopology: true })

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})


app.engine('handlebars', exphbs({ defaultLayout: "main" }))
app.set('view engine', 'handlebars')


app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`This app is running on ${port}`)
})