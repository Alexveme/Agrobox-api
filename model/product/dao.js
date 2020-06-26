import connection from '../../mongo.js';
import Product from './model.js';
import productSchema from './schema.js';


class ProductDAO {

    constructor(){}

    list(){
        return Product.find({});
    }

    listOne(id){
        return Product.findById(id);
    }

    create(product){
        return new Product(product).save();
    }

    removeProductById(id){
        return Product.findByIdAndRemove(id);
    }

    updateProduct(id, product){
        return Product.findByIdAndUpdate(id, product,
            { 'new': true, 'useFindAndModify': false });
    }
}

export default new ProductDAO();