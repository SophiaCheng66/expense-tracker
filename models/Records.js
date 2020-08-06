const mongoose = require('mongoose')
const Schema = mongoose.Schema
const recordSchema = new Schema({

  name: {
    type: String,

  },

  category: {
    type: String,
  },

  category1: {
    type: String,
  },

  category2: {
    type: String,
  },
  category3: {
    type: String,
  },

  category4: {
    type: String,
  },

  category5: {
    type: String,
  },


  icon: {
    type: String,
  },

  date: {
    type: String,
  },

  amount: {
    type: Number,

  },

  totalAmount: {
    type: Number,

  }
})

module.exports = mongoose.model('Record', recordSchema)