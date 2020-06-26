import subproductDAO from '../../model/subproducto/dao.js';

const listOne = async (req, res, next) => {

    try {

        const subproductId = req.params.id;

        const subproductFound = await subproductDAO.listOne(subproductId);
        res.status(201).json(subproductFound);

    } catch (error) {
        next(error);
    }

}

export default listOne;