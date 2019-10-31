const mongoose = require('mongoose')
const { Schema } = mongoose

const productSchema = new Schema({
  productName: String,
  price: Number,
  available: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
})

module.exports = mongoose.model('products', productSchema)