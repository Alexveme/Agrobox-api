import mongoose from 'mongoose';

const subproductSchema = mongoose.Schema({

    name: String,
    kilo_price: Number,
    unit_price: Number,
    image: String

})

export default subproductSchema;