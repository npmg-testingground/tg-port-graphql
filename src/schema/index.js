import { makeExecutableSchema } from 'graphql-tools';

import RootQuery from './query';
// mutation: Mutation
import { resolvers } from '../models';

const SchemaDefinition = `
  schema {
    query: RootQuery
  }
`;

export default makeExecutableSchema({
  typeDefs: [SchemaDefinition, RootQuery],
  resolvers,
  resolverValidationOptions: { requireResolversForAllFields: true } 
});