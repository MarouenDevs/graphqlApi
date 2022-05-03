
const resolvers = {
    toogleGender(parent, {user : {email, gender}}, {dataSources}, info) {
        const user = dataSources.usersDataSource.toogleGender(email, gender);
        return user;
    }
};

export default resolvers