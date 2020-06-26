import Router from 'express';
import register from '../controller/user/register.js';
import login from '../controller/user/login.js';

const router = Router();

router.route('/register')
      .post(register);

router.route('/login')
      .post(login);

export default router;