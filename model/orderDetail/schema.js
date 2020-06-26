import mongoose from 'mongoose';

const orderDetailSchema = mongoose.Schema({
    reference: String,
    number_products: Number,
    amount: Number,
    shipping_address: String,
    shipping_date: Date
})

export default orderDetailSchema;