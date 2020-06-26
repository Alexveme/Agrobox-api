import mongoose from 'mongoose';
import memberSchema from './schema.js';

const Member = mongoose.model('member', memberSchema);

export default Member;