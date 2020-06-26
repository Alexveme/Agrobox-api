import connection from '../../mongo.js';
import User from './model.js';


class UserDao {

    constructor(){}

    register(user){
        return new User(user).save();
    }

    findUser(user){
        return User.findOne(user);
    }

    findUserById(id){
        return User.findById(id);
    }

}

export default new UserDao();