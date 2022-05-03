const UsersDataSource = require('./data-sources/db.datasource').default;
import resolvers from './resolvers/index';
const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`

type Location {
    street: String
    city: String
    
}
type Infos {
    message: String
}
type User {
    email: String
    gender: Gender
    phone_number: String
    birthdate: Float
    location: Location!
    infos: [Infos]
    username: String
    password: String
    first_name: String
    last_name: String
    title: String
    picture: String
}


enum Gender {
    FEMALE 
    MALE
}
input PartialUser{
    email: String
    gender: Gender
}
type Query {
    users: [User]
    userByEmail(email: String): User!
}
type Mutation {
    toogleGender(user: PartialUser): User!
}
`;

const server = new ApolloServer({
    typeDefs,
    resolvers,
    debug:false,
    ssl:false,
    dataSources: () => ({
        usersDataSource: UsersDataSource
    })
});
server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});