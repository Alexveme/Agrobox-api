import mongoose from 'mongoose';

const producerSchema = mongoose.Schema({
    name: String,
    reference: Number,
    address: String,
    phone: Number,
    category: String
})

export default producerSchema;