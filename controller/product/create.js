import productDAO from '../../model/product/dao.js';

const create = async (req, res, next) => {

    try {

        const body = req.body;

        const product = await productDAO.create(body);
        res.status(201).json(product);

    } catch (error) {
        next(error);
    }

}

export default create;