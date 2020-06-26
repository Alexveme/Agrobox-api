import userDAO from '../../model/user/dao.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import HTTPerror from 'http-errors';

const login = async (req,res,next) => {

    try {

        const body = req.body;

        const user = await userDAO.findUser({ user: body.user });

        const correctPassword = user === null ? false : await bcrypt.compare(body.password, user.password);
        
        if (!(user && correctPassword)) {
            next(HTTPerror(401, { message: 'user or password is wrong' }));
        } else {
            const usuarioToken = {
                user: user.user,
                id: user._id
            }

            const token = await jwt.sign(usuarioToken, process.env.SECRET);
            res.status(201).json({token});
        }

    } catch (error) {
        next(error);
    }

}

export default login;