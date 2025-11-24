import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import typeDefs from "./typeDefs.ts";
import resolvers from "./resolvers/index.ts";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});
console.log(`Server ready at: ${url}`);
