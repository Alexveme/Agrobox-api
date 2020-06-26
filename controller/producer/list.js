import producerDAO from '../../model/producer/dao.js';

const list = async (req, res, next) => {

    try {

        const producers = await producerDAO.list();
        res.status(201).json(producers);

    } catch (error) {
        next(error);
    }

}

export default list;