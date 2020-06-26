import Router from 'express';
import create from '../controller/orderDetail/create.js';

const router = Router();

router.route('/')
    .post(create);

export default router;