const mongoose = require('mongoose')
const db = mongoose.connection
const Record = require('../../models/Records.js')
mongoose.connect("mongodb://localhost/expense-tracker", { useNewUrlParser: true, useUnifiedTopology: true })

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
  Record.create(
    {
      category1: '家居物業',
      icon1: '<i class="fas fa-home"></i>'

    },
    {
      category2: '交通出行',
      icon2: '<i class="fas fa-shuttle-van"></i>'
    },
    {
      category3: '休閒娛樂',
      icon3: '<i class="fas fa-grin-beam"></i>'
    },
    {
      category4: '餐飲食品',
      icon4: '<i class="fas fa-utensils"></i>'
    },
    {
      category5: '其他',
      icon5: '<i class="fas fa-pen"></i>'
    }
  )
})


