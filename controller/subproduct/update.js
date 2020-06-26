import subproductDAO from '../../model/subproducto/dao.js';

const update = async (req, res, next) => {

    try {

        const id = req.params.id;
        const body = req.body;

        const subproductUpdated = await subproductDAO.updateSubproduct(id, body);
        res.status(201).json(subproductUpdated);

    } catch (error) {
        next(error);
    }

}

export default update;