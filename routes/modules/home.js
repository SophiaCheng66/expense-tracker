const express = require('express')
const router = express.Router()
const Record = require('../../models/Records.js')


router.get('/', (req, res) => {
  Record.find()
    .lean()
    .then(records => res.render('index', { records }))
    .catch(error => console.log(error))
})


router.post('/totalAmount', (req, res) => {
  Record.find()
    .lean()
    .then(items => {
      let totalAmount = 0
      for (let i = 0; i < items.length; i++) {
        totalAmount += items[i].amount
      }
      res.render('amount', { items, totalAmount: totalAmount })
    })
    .catch(error => console.log(error))
})



router.get('/category/:C', (req, res) => {
  // console.log(req.params.C)
  const category = req.params.C
  if (category === 'H') {
    Record.find({ category: "家居物業" })
      .lean()
      .then(items => {
        let totalAmount = 0
        for (let i = 0; i < items.length; i++) {
          totalAmount += items[i].amount
        }
        res.render('category', { home: items, totalAmount: totalAmount })
      })
  } else if (category === 'T') {
    Record.find({ category: "交通出行" })
      .lean()
      .then(items => {
        let totalAmount = 0
        for (let i = 0; i < items.length; i++) {
          totalAmount += items[i].amount
        }
        res.render('category', { home: items, totalAmount: totalAmount })
      })
  } else if (category === 'E') {
    Record.find({ category: "休閒娛樂" })
      .lean()
      .then(items => {
        let totalAmount = 0
        for (let i = 0; i < items.length; i++) {
          totalAmount += items[i].amount
        }
        res.render('category', { home: items, totalAmount: totalAmount })
      })
  } else if (category === 'F') {
    Record.find({ category: "餐飲食品" })
      .lean()
      .then(items => {
        let totalAmount = 0
        for (let i = 0; i < items.length; i++) {
          totalAmount += items[i].amount
        }
        res.render('category', { home: items, totalAmount: totalAmount })
      })
  } else if (category === 'O') {
    Record.find({ category: "其他" })
      .lean()
      .then(items => {
        let totalAmount = 0
        for (let i = 0; i < items.length; i++) {
          totalAmount += items[i].amount
        }
        res.render('category', { home: items, totalAmount: totalAmount })
      })
  }

})

module.exports = router