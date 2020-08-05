const mongoose = require('mongoose')
const db = mongoose.connection
const Record = require('../../models/Records.js')
mongoose.connect("mongodb://localhost/expense-tracker", { useNewUrlParser: true, useUnifiedTopology: true })

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
  for (i = 0; i < 5; i++) {
    Record.create({
      category1: '家居物業', category2: '交通出行', category3: '休閒娛樂', category4: '餐飲食品', category5: '其他'
    })
  }
  console.log('done')

})


