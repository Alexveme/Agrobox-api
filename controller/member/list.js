import memberDAO from '../../model/member/dao.js';

const list = async (req, res, next) => {

    try {

        const members = await memberDAO.list();
        res.status(201).json(members);

    } catch (error) {
        next(error);
    }
    
}

export default list;