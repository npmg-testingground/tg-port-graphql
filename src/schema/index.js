import { makeExecutableSchema } from 'graphql-tools';

import RootQuery from './query';
// mutation: Mutation
import { resolvers, mutation } from '../models';
const Mutation = mutation;

const SchemaDefinition = `
  schema {
    query: RootQuery
    mutation: Mutation
  }
`;

export default makeExecutableSchema({
  typeDefs: [SchemaDefinition, RootQuery, Mutation],
  resolvers,
  resolverValidationOptions: { requireResolversForAllFields: true } 
});