import orderDAO from '../../model/order/dao.js';

const listOne = async (req, res, next) => {

    try {

        const orderId = req.params.id;

        const orderfounded = await orderDAO.listOneById(orderId);
        res.status(201).json(orderfounded);

    } catch (error) {
        next(error);
    }

}

export default listOne;