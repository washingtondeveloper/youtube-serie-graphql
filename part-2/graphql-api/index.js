const { ApolloServer, gql } = require('apollo-server');
const { products, clients } = require('./data');

const typeDefs = gql`
	type Client {
		id: Int
		name: String
		email: String
	}

	type Product {
		id: Int
		name: String
		price: Float
	}

	type Query {
		clients: [Client]
		products: [Product]
	}
`;

const resolvers = {
	Query: {
		products() {
			return products;
		},
		clients() {
			return clients;
		}
	}
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => console.log(`API GraphQL running ${url}`));
