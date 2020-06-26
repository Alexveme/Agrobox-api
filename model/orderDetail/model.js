import mongoose from 'mongoose';
import orderDetailSchema from './schema.js';

const OrderDetail = mongoose.model('orderDetail', orderDetailSchema);

export default OrderDetail;