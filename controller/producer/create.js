import producerDAO from '../../model/producer/dao.js';

const create = async (req, res, next) => {

    try {

        const body = req.body;

        const producer = await producerDAO.create(body);
        res.status(201).json(producer);

    } catch (error) {
        next(error);
    }

}

export default create;