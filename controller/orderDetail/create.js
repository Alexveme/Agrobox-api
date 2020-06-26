import orderDetailDAO from '../../model/orderDetail/dao.js';

const create = async (req, res, next) => {

    try {

        const body = req.body;

        const orderDetail = await orderDetailDAO.create(body);
        res.status(201).json(orderDetail);

    } catch (error) {
        next(error);
    }

}

export default create;