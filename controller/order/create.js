import orderDAO from '../../model/order/dao.js';

const create = async (req, res, next) => {

    try {

        const body = req.body;

        const order = await orderDAO.create(body);
        res.status(201).json(order);

    } catch (error) {
        next(error);
    }

}

export default create;