import memberDAO from '../../model/member/dao.js';

const listOne = async (req, res, next) => {

    try {

        const memberId = req.params.id;

        const memberFounded = await memberDAO.listOneById(memberId);
        res.status(201).json(memberFounded);

    } catch (error) {
        next(error);
    }
    
}

export default listOne;