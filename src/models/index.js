import merge from 'lodash.merge';

const extractMutationBody = (mutation) =>
  mutation()[0]
    .split('{') // Character to start from
    .pop()
    .split('}') // Character to end with
    .shift();

const pushMutationItems = (extractedMutation, mutationArray) =>
  mutationArray.splice(3, 0, extractedMutation); // This always returns an empty array

let resolvers = {};
let types = [];
let mutationParts = ['type', 'Mutation', '{', '}'];
let mutation;

let resolverReq = require.context('./', true, /.+?resolver\.js/);
resolverReq.keys().forEach(path => {
  resolvers = merge(resolvers, resolverReq(path).default);
});

let typeReq = require.context('./', true, /.+?type\.js/);
typeReq.keys().forEach(path => {
  types.push(typeReq(path).default);
});

let mutationReq = require.context('./', true, /.+?mutation\.js/);
mutationReq.keys().forEach(path => {
  pushMutationItems(extractMutationBody(mutationReq(path).default), mutationParts);
});

// Add the root resolver as well
resolvers = merge(resolvers, require('../schema/resolver.js').default); // eslint-disable-line
mutation = mutationParts.join(' ');

export {
  resolvers,
  types,
  mutation
};