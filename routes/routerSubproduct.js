import Router from 'express';
import create from '../controller/subproduct/create.js';
import list from '../controller/subproduct/list.js';
import listOne from '../controller/subproduct/listOne.js';
import remove from '../controller/subproduct/remove.js';
import update from '../controller/subproduct/update.js';

const router = Router();

router.route('/')
    .get(list)
    .post(create);

router.route('/:id')
    .get(listOne)
    .delete(remove)
    .post(update);

export default router;