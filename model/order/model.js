import mongoose from 'mongoose';
import orderSchema from './schema.js';

const Order = mongoose.model('order', orderSchema);

export default Order;