import productDAO from '../../model/product/dao.js';

const list = async (req, res, next) => {

    try {

        const products = await productDAO.list();
        res.status(201).json(products);

    } catch (error) {
        next(error);
    }

}

export default list;