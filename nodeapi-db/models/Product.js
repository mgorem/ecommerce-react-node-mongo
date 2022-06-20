const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
    {
        title: {type: String, required: true, unique: true},
        desc: {type: String, required: true},
        image: {type: String, required: true},
        category: {type: Array},
        size: {type: String},
        color: {type: String},
        price: {type: Number, required: true},
    },
    {timestamps: true}
)

module.exports = mongoose.model('Product', productSchema)