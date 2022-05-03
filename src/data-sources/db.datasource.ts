import { DataSource } from "apollo-datasource";
import { ApolloError } from "apollo-server";


const usersList = require('../../data/users.json');

class UsersDataSource extends DataSource{
   protected _usersList = usersList;
    constructor() {
        super();
    }

    findByEmail(email: string) {
      return this._usersList.find((user) => user.email === email);
    }

    toogleGender(email: string, gender: string) {
       const index = this._usersList.findIndex((user) => user.email === email); 
       if(index!== -1) {
        this._usersList[index].gender = gender;
        return this._usersList[index];
       } else {
        throw new ApolloError('Cannot found user', 'USER_NOT_FOUND');
       }
    
    }

    getAll() {
        return this._usersList;
    }
}

export default new UsersDataSource();