import connection from '../../mongo.js';
import Order from './model.js';


class OrderDAO {

    constructor(){}

    list(){
        return Order.find({}); 
    }

    listOneById(id){
        return Order.findById(id);
    }

    create(order){
        return new Order(order).save();
    }

}

export default new OrderDAO();