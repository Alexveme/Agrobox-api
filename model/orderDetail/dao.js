import connection from '../../mongo.js';
import OrderDetail from './model.js';

class OrderDetailDao {

    constructor(){}

    create(orderDetail){
        return new OrderDetail(orderDetail).save();
    }

}

export default new OrderDetailDao();