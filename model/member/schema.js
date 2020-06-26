import mongoose from 'mongoose';

const memberSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name required']
    },
    surname: {
        type: String,
        required: [true, 'surname required']
    },
    address: String,
    email: String,
    phone: String
})

export default memberSchema;