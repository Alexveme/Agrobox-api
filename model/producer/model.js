import mongoose from 'mongoose';
import producerSchema from './schema.js';

const Producer = mongoose.model('producer', producerSchema);

export default Producer;