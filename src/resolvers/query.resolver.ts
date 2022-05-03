
const resolvers = {
    users: (parent, args, {dataSources}, info) =>{
        return dataSources.usersDataSource.getAll();
      },
      userByEmail: (parent, {email}, {
        dataSources
      }, info) =>{
        return dataSources.usersDataSource.findByEmail(email);
      }
};

export default resolvers