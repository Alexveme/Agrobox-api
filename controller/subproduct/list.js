import subproductDAO from '../../model/subproducto/dao.js';

const list = async (req, res, next) => {

    try {

        const subproducts = await subproductDAO.list();
        res.status(201).json(subproducts);
         
    } catch (error) {
        next(error);
    }

}

export default list;