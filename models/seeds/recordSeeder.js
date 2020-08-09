const db = require('../../config/mongoose.js')
const Record = require('../../models/Records.js')




db.once('open', () => {

  Record.create(
    {
      icon: '<i class="fas fa-utensils"></i>',
      name: '午餐',
      amount: 60,
      date: '2020-8-5',
      category: '餐飲食品',
      totalAmount: 0
    },

    {
      icon: '<i class="fas fa-home"></i>',
      name: '書桌',
      amount: 7000,
      date: '2020-8-5',
      category: '家居物業',
      totalAmount: 0
    },



    {
      icon: '<i class="fas fa-shuttle-van"></i>',
      name: '捷運',
      amount: 100,
      date: '2020-8-5',
      category: '交通出行',
      totalAmount: 0
    },



    {
      icon: '<i class="fas fa-grin-beam"></i>',
      name: '電影',
      amount: 300,
      date: '2020-8-5',
      category: '休閒娛樂',
      totalAmount: 0
    },

    {
      icon: '<i class="fas fa-pen"></i>',
      name: '保險費',
      amount: 3500,
      date: '2020-8-5',
      category: '其他',
      totalAmount: 0
    },

  )

})


