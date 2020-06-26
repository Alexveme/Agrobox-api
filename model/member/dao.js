import connection from '../../mongo.js';
import Member from './model.js';


class MemberDAO {

    constructor(){}

    list(){
        return Member.find({});
    }

    listOneById(id){
        return Member.findById(id);
    }

    create(member){
        return new Member(member).save();
    }
}

export default new MemberDAO();