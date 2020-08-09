const express = require('express')
const router = express.Router()
const Record = require('../../models/Records.js')

router.get('/new', (req, res) => {
  res.render('new')
})

router.post('/', (req, res) => {
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


router.get('/:record_id/edit', (req, res) => {
  const id = req.params.record_id
  Record.findById(id)
    .lean()
    .then(recordId => res.render('edit', { recordId }))
    .catch(error => console.log(error))
})




router.put('/:record_id', (req, res) => {
  const id = req.params.record_id
  // console.log(req.body.name)
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

  Record.findById(id)
    .then(recordId => {
      recordId.name = name,
        recordId.date = date,
        recordId.name = name,
        recordId.amount = amount,
        recordId.category = category,
        recordId.icon = icon
      recordId.save()
    })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

router.delete('/:record_id', (req, res) => {
  const id = req.params.record_id
  Record.findById(id)
    .then(recordId => recordId.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})











module.exports = router