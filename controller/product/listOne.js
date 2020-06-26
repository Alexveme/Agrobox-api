import productDAO from '../../model/product/dao.js';

const listOne = async (req, res, next) => {

    try {

        const productId = req.params.id;

        const productFound = await productDAO.listOne(productId);
        res.status(201).json(productFound);

    } catch (error) {
        next(error);
    }

}

export default listOne;