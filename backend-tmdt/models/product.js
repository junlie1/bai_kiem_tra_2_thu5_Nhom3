const mongoose = require('mongoose');

productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    numberReviews: {
        type: String,
        required: true
    },
    images: {
        type: [String],
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    isBestSeller: {
        type: String,
        default: false
    },
})

const Product = mongoose.model("Product", productSchema);

module.exports = Product;