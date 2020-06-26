import Router from 'express';
import create from '../controller/order/create.js';
import list from '../controller/order/list.js';
import listOne from '../controller/order/listOne.js';

const router = Router();

router.route('/')
    .post(create)
    .get(list);

router.route('/:id')
    .get(listOne);

export default router;