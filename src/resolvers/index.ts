import Query from './query.resolver';
import Mutation from './mutation.resolver';

export default {
    Query,
    Mutation,
    User: {
        infos(user) {
            return [{
                message: `test my email : ${user.email}`
            }]
        } 
    },
    Gender: {
       FEMALE: 'female',
       MALE: 'male'
    },
}