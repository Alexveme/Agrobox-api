import memberDAO from '../../model/member/dao.js';

const create = async (req, res, next) => {

    try {

        const body = req.body;

        const member = await memberDAO.create(body);
        res.status(201).json(member);

    } catch (error) {
        next(error);
    }

}

export default create;