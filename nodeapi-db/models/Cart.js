// cart schema/model to represent how cart data should be saved in mongodb
const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema(
    {
        userId: {type: String, required: true},
        products: [
            {
                productId: {
                    type: String,
                },
                quantity: {
                    type: Number,
                    default: 1,
                },
            },
        ],
    },
    {timestamps: true}
)

module.exports = mongoose.model('Cart', cartSchema)