
const db = require('../../config/mongoose.js')
const Record = require('../../models/Records.js')



db.once('open', () => {

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


