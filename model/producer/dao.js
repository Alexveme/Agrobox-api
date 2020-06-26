import connection from '../../mongo.js';
import Producer from './model.js';
import producerSchema from './schema.js';


class ProducerDAO {

    constructor(){}

    list(){
        return Producer.find({});
    }

    listOne(id){
        return Producer.findById(id);
    }

    create(producer){
        return new Producer(producer).save();
    }
}

export default new ProducerDAO();