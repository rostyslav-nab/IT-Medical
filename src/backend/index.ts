import { ApolloServer, gql } from 'apollo-server'

import { typeDefs } from './type-defs'
import { resolvers } from './resolvers'

const server = new ApolloServer({ typeDefs, resolvers });

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});