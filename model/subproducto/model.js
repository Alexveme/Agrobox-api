import mongoose from 'mongoose';
import subproductSchema from './schema.js';

const Subproduct = mongoose.model('subproducto', subproductSchema);

export default Subproduct;