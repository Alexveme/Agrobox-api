import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

import routerUser from './routes/routerUser.js';
import routerMember from './routes/routerMember.js';
import routerProduct from './routes/routerProduct.js';
import routerSubproduct from './routes/routerSubproduct.js';
import routerProducer from './routes/routerProducer.js';
import routerOrder from './routes/routerOrder.js';
import routerOrderDetail from './routes/routerOrderDetail.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/user', routerUser);
app.use('/member', routerMember);
app.use('/product', routerProduct);
app.use('/subproduct', routerSubproduct);
app.use('/producer', routerProducer);
app.use('/order', routerOrder);
app.use('/orderDetails', routerOrderDetail);

const PORT = process.env.PORT;
app.listen(PORT, _=> console.log('Server runnig on port: ', PORT));