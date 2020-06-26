import userDAO from '../../model/user/dao.js';
import bcrypt from 'bcrypt';

const register = async (req,res,next) => {

    try {

        const body = req.body;
        const saltRounds = 10;

        const passwordHash = await bcrypt.hash(body.password, saltRounds);

        const newUser = {
            user: body.user,
            password: passwordHash
        }

        const user = await userDAO.register(newUser);

        res.status(201).json(user);

    } catch (error) {
        next(error);
    }
}

export default register;