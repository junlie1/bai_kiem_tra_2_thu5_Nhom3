const mongoose = require('mongoose');

categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    icon: {
        type: String
    }
})

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;