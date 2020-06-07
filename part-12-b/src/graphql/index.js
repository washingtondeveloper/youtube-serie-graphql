const { join } = require("path");
const {
  loadFilesSync,
  mergeTypeDefs,
  mergeResolvers,
} = require("graphql-tools");

const allTypesDefs = loadFilesSync(join(__dirname, "modules", "**", "*.gql"));
const allResolvers = loadFilesSync(join(__dirname, "modules", "**", "*.js"));
const typeDefs = mergeTypeDefs(allTypesDefs);
const resolvers = mergeResolvers(allResolvers);

module.exports = { typeDefs, resolvers };
