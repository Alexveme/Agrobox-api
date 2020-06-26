import mongoose from 'mongoose';

const userSchema = mongoose.Schema({

    user: {
        type: String,
        required: [true, 'user required']/*,
        unique: [true, 'user must be unique']*/
    },
    password: {
        type: String
    }
})

export default userSchema;