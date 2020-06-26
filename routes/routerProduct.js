import Router from 'express';
import create from '../controller/product/create';
import list from '../controller/product/list.js';
import listOne from '../controller/product/listOne.js';
import remove from '../controller/product/remove.js';
import update from '../controller/product/update.js';

const router = Router();

router.route('/')
    .get(list)
    .post(create);

router.route('/:id')
    .get(listOne)
    .delete(remove)
    .post(update);

export default router;