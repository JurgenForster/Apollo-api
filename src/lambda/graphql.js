// src/lambda/graphql.js
const { ApolloServer, gql } = require("apollo-server-lambda");

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: (root, args, context) => {
      return "Hello, world!";
    }
  }
};

const endpoint = 'http://localhost:9000/graphql';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    settings: {
      'editor.theme': 'dark',
    },
    tabs: [
      {
        endpoint
      },
    ],
  },
});

exports.handler = server.createHandler();
