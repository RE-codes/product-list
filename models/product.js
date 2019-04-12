const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProductSchema = new Schema({
  category: String,
  name: String,
  price: Number,
  image: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Review'
    }
  ]
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = { Product };