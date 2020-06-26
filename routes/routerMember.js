import Router from 'express';
import create from '../controller/member/create.js';
import list from '../controller/member/list.js';
import listOne from '../controller/member/listOne.js';

const router = Router();

router.route('/')
    .get(list)
    .post(create);

router.route('/:id')
    .get(listOne);

export default router;