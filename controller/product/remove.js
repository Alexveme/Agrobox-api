import productDAO from '../../model/product/dao.js';

const remove = async (req, res, next) => {

    try {

        const productId = req.params.id;

        const productToRemove = await productDAO.removeProductById(productId);
        res.status(201).json(productToRemove);

    } catch (error) {
        next(error);
    }

}

export default remove;