const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    product: {
        type: String,
    },
    sold_amount: {
        type: Number,
    },
    unit_price: {
        type: Number,
    },
    revenue: {
        type: Number,
    },
    rating: {
        type: Number,
        min: 0,
        max: 5  
    }
});

const ProductModel = mongoose.model('Product', ProductSchema);

module.exports =
 {
    ProductModel

 }