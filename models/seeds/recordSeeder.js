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
    Record.create({ name: 'Name', amount: 0, data: 'Year/Month/Day', totalAmount: 0 })
  }
  console.log('done')

})


