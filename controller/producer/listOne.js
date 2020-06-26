import producerDAO from '../../model/producer/dao.js';

const listOne = async (req, res, next) => {

    try {

        const producerId = req.params.id;

        const producerFounded = await producerDAO.listOne(producerId);
        res.status(201).json(producerFounded);

    } catch (error) {
        next(error);
    }

}

export default listOne;