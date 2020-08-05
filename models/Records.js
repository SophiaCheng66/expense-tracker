const mongoose = require('mongoose')
const Schema = mongoose.Schema
const recordSchema = new Schema({

  name: {
    type: String,
    // required: true
  },

  category1: {
    type: String,
    //required: true
  },

  category2: {
    type: String,
    //required: true
  },

  category3: {
    type: String,
    //required: true
  },

  category4: {
    type: String,
    //required: true
  },

  category5: {
    type: String,
    //required: true
  },


  date: {
    type: Date,
    default: Date.now
    // required: true
  },

  amount: {
    type: Number,
    // required: true
  },

  totalAmount: {
    type: Number,
    // required: true
  }
})

module.exports = mongoose.model('Record', recordSchema)