const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const port = 3000
const mongoose = require('mongoose')
const Record = require('./models/Records.js')
const bodyParser = require('body-parser')
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
app.use(bodyParser.urlencoded({ extended: true }))




app.get('/', (req, res) => {
  Record.find()
    .lean()
    .then(records => res.render('index', { records }))
    .catch(error => console.log(error))
})

app.get('/records/new', (req, res) => {
  res.render('new')
})

app.post('/records', (req, res) => {
  console.log(req.body)
  const name = req.body.name
  const date = req.body.date
  const amount = req.body.amount
  const category = req.body.category
  if (category === '家居物業') {
    icon = '<i class="fas fa-home"></i>'
  } else if (category === '交通出行') {
    icon = '<i class="fas fa-shuttle-van"></i>'
  } else if (category === '休閒娛樂') {
    icon = '<i class="fas fa-grin-beam"></i>'
  } else if (category === '餐飲食品') {
    icon = '<i class="fas fa-utensils"></i>'
  } else if (category === '其他') {
    icon = '<i class="fas fa-pen"></i>'
  }

  // console.log(icon)
  Record.create({
    icon: icon,
    name: name,
    date: date,
    amount: amount,
    category: category
  })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})













app.listen(port, () => {
  console.log(`This app is running on ${port}`)
})