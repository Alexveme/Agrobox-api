import Router from 'express';
import create from '../controller/producer/create.js';
import list from '../controller/producer/list.js';
import listOne from '../controller/producer/listOne.js';

const router = Router();

router.route('/')
    .post(create)
    .get(list);

router.route('/:id')
    .get(listOne);

export default router;