import subproductDAO from '../../model/subproducto/dao.js';

const remove = async (req, res, next) => {

    try {

        const subproductId = req.params.id;

        const subproductToRemove = await subproductDAO.removeOneById(subproductId);
        res.status(201).json(subproductToRemove);

    } catch (error) {
        next(error);
    }

}

export default remove;