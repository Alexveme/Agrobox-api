import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    reference: String,
    name: String,
    category: String,
    seson: String
})

export default productSchema;