import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
    reference: Number,
    amount: Number,
    order_date: Date,
    products: Array
    
})

export default orderSchema;