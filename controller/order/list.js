import orderDAO from '../../model/order/dao.js';

const list = async (req, res, next) => {

    try {

        const orders = await orderDAO.list();
        res.status(201).json(orders);

    } catch (error) {
        next(error);
    }

}

export default list;