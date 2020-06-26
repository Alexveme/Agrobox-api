import connection from '../../mongo.js';
import Subproduct from './model.js';


class SubproductDao {

    constructor(){}

    list(){
        return Subproduct.find({});
    }

    listOne(id){
        return Subproduct.findById(id);
    }

    create(subproduct){
        return new Subproduct(subproduct).save();
    }

    removeOneById(id){
        return Subproduct.findByIdAndRemove(id);
    }

    updateSubproduct(id, subproduct){
        return Subproduct.findByIdAndUpdate(id, subproduct,
            { 'new': true, 'useFindAndModify': false});
    }
}

export default new SubproductDao();