import { ApolloServer } from 'apollo-server';
import { makeExecutableSchema } from 'graphql-tools';
import { applyMiddleware } from 'graphql-middleware';
import { resolvers } from './resolvers';
import typeDefs from './typeDefs';

const schema = applyMiddleware(
  makeExecutableSchema({
    resolvers: resolvers as any,
    typeDefs
  })
);

const server = new ApolloServer({
  schema,
  context: () => {
    return {};
  },
});

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url, subscriptionsUrl }) => {
  // tslint:disable:no-console
  console.log(`🚀  Server ready at ${url}`);
  console.log(`🚀  Subscriptions ready at ${subscriptionsUrl}`);
  // tslint:enable:no-console
});
