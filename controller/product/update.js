import productDAO from '../../model/product/dao.js';

const update = async (req, res, next) => {

    try {

        const id = req.params.id;
        const body = req.body;

        const productUpdated = await productDAO.updateProduct(id, body);
        res.status(201).json(productUpdated);

    } catch (error) {
        next(error);
    }

}

export default update;