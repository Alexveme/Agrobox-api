import subproductDAO from '../../model/subproducto/dao.js';

const create = async (req, res, next) => {

    try {

        const body = req.body;

        const subproduct = await subproductDAO.create(body);
        res.status(201).json(subproduct);

    } catch (error) {
        next(error);
    }

}

export default create;