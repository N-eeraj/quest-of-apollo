import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import typeDefs from "./typeDefs.ts";
import resolvers from "./resolvers/index.ts";

const port = Number(process.env.PORT);

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: {
    port,
  },
});
console.log(`Server ready at: ${url}`);
